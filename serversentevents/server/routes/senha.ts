const router = createRouter()

router.get('/senha', defineEventHandler((event) => {
    const test = "Funcionou"
    return test
}))

router.post('/senha', defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    console.log(body.senha)
    return body
}))

export default useBase('/', router.handler)