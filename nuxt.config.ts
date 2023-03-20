// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.sass',
        configPath: 'tailwind.config.ts',
        viewer: false
    },
    webpack: {
        aggressiveCodeRemoval: true,
        optimizeCSS: true,
    },
    vite: {
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        //if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        if (id.includes("")) {
                            console.log("id - " + id.replace("/Users/laurinfrank/MEGAsync/coding/web/l03/", ""))
                        }
                        if (id.includes("node_modules/")) {
                            if (id.includes("simplex-noise")) {
                                return "simplex-noise";
                            } else if (id.includes("debounce")) {
                                return "debounce";
                            } else if (id.includes("vue")) {
                                return "vue";
                            }
                        }
                    },
                    compact: true,
                }
            },
            minify: 'terser',
        }
    },
    experimental: {
        payloadExtraction: false
    },
    app: {
        baseURL: "",
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: 'theme-color', content: 'dark' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
                { name: 'description', content: 'Account Management for l03.dev User to manage Websites, Statistics and other important Settings.' }
            ],
            title: 'lx media',
            /*script: [
                { src: 'https://fastdl.l03.dev/js/fontawesome.js', defer: true, tagPosition: 'bodyClose'}
            ],*/
        },
    },


})
