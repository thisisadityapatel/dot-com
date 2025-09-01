import React, { useState, useEffect } from 'react'
import path from 'path'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { promises as fs } from 'fs';
import rehypeRaw from "rehype-raw";


const Blog = ({blogfiles}) => {
    const router = useRouter();
    const { blog } = router.query;
    const [isClient, setIsClient] = useState(false);

    const content = blogfiles.find(file => file.filename.replace(/\.md$/, '') === blog)?.content;

    useEffect(() => {
        setIsClient(true);
        
        // Add copy buttons to all code blocks after component mounts
        const codeBlocks = document.querySelectorAll('pre');
        codeBlocks.forEach((pre, index) => {
            if (!pre.querySelector('.copy-button')) {
                const code = pre.querySelector('code');
                if (code) {
                    const codeText = code.textContent || '';
                    const copyButton = document.createElement('button');
                    copyButton.className = 'copy-button';
                    copyButton.textContent = 'Copy';
                    copyButton.style.cssText = `
                        position: absolute;
                        top: 8px;
                        right: 8px;
                        background: #f1f3f4;
                        color: #5f6368;
                        border: none;
                        border-radius: 4px;
                        padding: 4px 8px;
                        font-size: 12px;
                        cursor: pointer;
                        z-index: 10;
                        transition: all 0.2s ease;
                    `;
                    
                    copyButton.addEventListener('click', async () => {
                        try {
                            await navigator.clipboard.writeText(codeText);
                            copyButton.textContent = 'Copied!';
                            copyButton.style.background = '#28a745';
                            copyButton.style.color = 'white';
                            setTimeout(() => {
                                copyButton.textContent = 'Copy';
                                copyButton.style.background = '#f1f3f4';
                                copyButton.style.color = '#5f6368';
                            }, 2000);
                        } catch (err) {
                            console.error('Failed to copy: ', err);
                        }
                    });
                    
                    copyButton.addEventListener('mouseenter', () => {
                        if (copyButton.textContent === 'Copy') {
                            copyButton.style.background = '#e8eaed';
                        }
                    });
                    
                    copyButton.addEventListener('mouseleave', () => {
                        if (copyButton.textContent === 'Copy') {
                            copyButton.style.background = '#f1f3f4';
                        }
                    });
                    
                    pre.style.position = 'relative';
                    pre.appendChild(copyButton);
                }
            }
        });
    }, []);

    return (
        <div className="container blogcontainer">
            <div className="mt-5">
                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            if (!inline) {
                                return (
                                    <pre style={{
                                        backgroundColor: '#f6f8fa',
                                        borderRadius: '6px',
                                        padding: '16px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        border: '1px solid #e1e4e8',
                                        margin: 0
                                    }}>
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    </pre>
                                );
                            }
                            return (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const blog_directory = path.join(process.cwd(), '_data/blog');
    const filenames = await fs.readdir(blog_directory);
    return {
        paths: filenames.map((filename) => ({ params: { blog: filename.replace(/\.md$/, '') } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blog_directory = path.join(process.cwd(), '_data/blog');
    const filenames = await fs.readdir(blog_directory);
    const blogfiles = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(blog_directory, filename);
            const content = await fs.readFile(filePath, 'utf8');
            return { filename, content };
        })
    );
    return {
        props: { blogfiles },
    }
}


export default Blog