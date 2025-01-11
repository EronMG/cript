import React, { useState } from 'react'
import { VscSend } from 'react-icons/vsc'
import Picker from 'emoji-picker-react'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)

    const handleSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue])
            setInputValue('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    }

    const onEmojiClick = (emojiObject) => {
        console.log('Selected Emoji Object:', emojiObject)
        if (emojiObject && emojiObject.unified) {
            const emoji = String.fromCodePoint(...emojiObject.unified.split('-').map((hex) => parseInt(hex, 16)))
            setInputValue((prevInput) => prevInput + emoji)
        }
        setShowEmojiPicker(false)
    }

    return (
        <section className='flex justify-center pt-4 px-4 pb-10'>
            <div className='bg-primary px-4 pt-4 pb-8 rounded-2xl max-w-[705px] relative w-full flex-1 shadow-lg'>
                <div className='w-full h-14 blur-lg absolute bg-primary z-30 top-4 left-0' />
                <h2 className='text-white z-50 relative text-base'>Comments</h2>
                <div className='h-[505px] overflow-y-auto flex flex-col'>
                    {messages.map((msg, index) => (
                        <div key={index} className='flex justify-end mb-2 mr-2'>
                            <div className='bg-blue text-white px-4 py-2 rounded-lg max-w-[75%] shadow-md relative'>
                                {msg} <div className='bg-blue absolute right-[-5px] w-7 h-2 rounded-br-[100px] top-0' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex rounded-lg bg-[#1B1D28] px-5 py-4 gap-2 items-center mt-4 relative'>
                    <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='text-white text-xl'>
                        😊
                    </button>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className='w-[90%] bg-transparent text-lg text-white placeholder:opacity-20 outline-none'
                        placeholder='Type message'
                    />
                    <VscSend className='text-white opacity-50 text-2xl cursor-pointer hover:opacity-100' onClick={handleSend} />
                    {showEmojiPicker && (
                        <div style={{ position: 'absolute', bottom: '60px', left: '10px' }}>
                            <Picker theme='dark' onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Chat
