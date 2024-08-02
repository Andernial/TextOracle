
const buttonSend = document.getElementById('buttonSend')
const screen = document.getElementById('screen')
const appContainer = document.getElementById('appContainer')





async function queryData(data) {
    try {
        buttonSend.disabled = true
        const request = fetch("https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment",

            {
                headers: {
                    Authorization: 'Bearer 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'
                },
                method: 'POST',
                body: JSON.stringify(data)


            })

        const result = (await request).json();
        return result
    } catch (error) {
        return console.log(error)
    } finally {
        buttonSend.disabled = false
    }

}


buttonSend.addEventListener('click', () => {
    const chat = document.getElementById('input-text').value
    if (chat) {
        return queryData({ inputs: chat }).then((response) => {
            let data = response[0]
            console.log(data)
            if (data[0].label === '1 star') {
                screen.innerHTML = `O texto representa uma emoção muito negativa`
                appContainer.style.backgroundColor = '#5E8CDC'
                return
            }
            if (data[0].label === '2 stars') {
                screen.innerHTML = `O texto representa uma emoção negativa`
                appContainer.style.backgroundColor = '#4DFFFC'
                return
            }
            if (data[0].label === '3 stars') {
                screen.innerHTML = `O texto representa uma emoção neutra`
                appContainer.style.backgroundColor = '#D2D2D2'
                return
            }
            if (data[0].label === '4 stars') {
                screen.innerHTML = `O texto representa uma emoção positiva`
                appContainer.style.backgroundColor = '#FFED4D'
                return
            }

            if (data[0].label === '5 stars') {
                screen.innerHTML = `O texto representa uma emoção muito positiva`
                appContainer.style.backgroundColor = '#4DFF77'
                return
            }
            
        })
    }

    console.log('nenhum dado no chat')

})


// queryData({ inputs: 'i hate it' }).then((response) => {
//     console.log(JSON.stringify(response))
// })