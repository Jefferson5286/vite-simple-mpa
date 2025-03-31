import fs from 'fs'
import path from 'path'


export default function viteSimpleMPA(options = { pages: {} }) {
    return {
        name: 'vite-simple-mpa',
        configureServer(server) {
            server.middlewares.use((request, response, next) => {
                const url = new URL(request.url, `http://${request.headers.host}`)
                const pageConfig = Object.values(options.pages).find(page => page.route === url.pathname)

                if (pageConfig) {
                    const filePath = path.resolve(process.cwd(), pageConfig.target)

                    if (fs.existsSync(filePath)) {
                        response.setHeader('Content-Type', 'text/html')
                        return fs.createReadStream(filePath).pipe(response)
                    }
                }
                next()
            })
        }
    }
}
