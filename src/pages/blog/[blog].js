import React, { useState, useEffect } from 'react'
import path from 'path'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { promises as fs } from 'fs';
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";


const Blog = ({blogfiles}) => {
    const router = useRouter();
    const { blog } = router.query;
    const [isClient, setIsClient] = useState(false);

    const content = blogfiles.find(file => file.filename.replace(/\.md$/, '') === blog)?.content;

    useEffect(() => {
        setIsClient(true);
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
                                const language = match ? match[1] : 'text';
                                const codeText = String(children).replace(/\n$/, "");
                                
                                if (!isClient) {
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
                                    <div style={{ position: 'relative' }}>
                                        <button
                                            onClick={async () => {
                                                try {
                                                    await navigator.clipboard.writeText(codeText);
                                                    const button = event.target;
                                                    button.textContent = 'Copied!';
                                                    button.style.background = '#28a745';
                                                    button.style.color = 'white';
                                                    setTimeout(() => {
                                                        button.textContent = 'Copy';
                                                        button.style.background = '#f1f3f4';
                                                        button.style.color = '#5f6368';
                                                    }, 2000);
                                                } catch (err) {
                                                    console.error('Failed to copy: ', err);
                                                }
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '8px',
                                                right: '8px',
                                                background: '#f1f3f4',
                                                color: '#5f6368',
                                                border: 'none',
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                cursor: 'pointer',
                                                zIndex: 10,
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (e.target.textContent === 'Copy') {
                                                    e.target.style.background = '#e8eaed';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (e.target.textContent === 'Copy') {
                                                    e.target.style.background = '#f1f3f4';
                                                }
                                            }}
                                        >
                                            Copy
                                        </button>
                                        <SyntaxHighlighter
                                            language={language}
                                            style={oneLight}
                                            customStyle={{
                                                borderRadius: '6px',
                                                fontSize: '14px',
                                                border: '1px solid #e1e4e8',
                                                margin: 0
                                            }}
                                            PreTag="div"
                                        >
                                            {codeText}
                                        </SyntaxHighlighter>
                                    </div>
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