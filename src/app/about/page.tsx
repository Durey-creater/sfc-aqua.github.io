import About from './page.mdx'

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="prose">
                <About />
            </div>
        </div>

    )
}
