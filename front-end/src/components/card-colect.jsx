'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContatoForm({ id_imovel }) {
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        resposta: ''
    })

    const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/enviar-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    resposta: formData.resposta,
                    id_imovel
                })
            })

            const data = await response.json()

            if (!response.ok || data.error) throw new Error()

            setStatus('success')
            setFormData({ name: '', phone: '', resposta: '' }) // reset form
        } catch (error) {
            setStatus('error')
        } finally {
            setTimeout(() => setStatus(null), 4000) // limpa a mensagem depois de 4s
        }
    }

    return (
        <div className='w-[390px] border-yellow-300 rounded-2xl p-6 relative text-yellow-300 border-2 flex justify-center items-center flex-col'>

            <svg className='my-2' height="87" width="87" fill="none" viewBox="0 0 53 57" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 0.75C16.7891 0.75 11.75 5.78906 11.75 12C11.75 18.2109 16.7891 23.25 23 23.25C29.2109 23.25 34.25 18.2109 34.25 12C34.25 5.78906 29.2109 0.75 23 0.75ZM17.375 27C8.02929 27 0.5 34.5293 0.5 43.875V45.75C0.5 49.9102 3.83984 53.25 8 53.25H30.5V49.5H19.25V34.5H30.5V27.1025C29.8848 27.0293 29.2549 27 28.625 27H17.375ZM34.25 27V38.25H23V45.75H34.25V57H41.75V45.75H53V38.25H41.75V27H34.25Z" fill="#FFDF20" />
            </svg>
            <p className='text-yellow-300 text-center font-bold'>Deixe seu contato <br />vamos te chamar em breve! </p>
            <br />
            <p>Em breve nossos <span className='font-bold'>Corretores</span> irão te atender!</p>
            <br />

                <form onSubmit={handleSubmit} className="flex flex-col w-[300px]">
                    <p className='ml-2 text-gray-500 text-sm font-semibold'>Seu Nome:</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded-2xl bg-white text-gray-500 border-yellow-300 border-2 outline-none text-sm"
                        required
                    />
                    <p className='ml-2 mt-4 text-gray-500 text-sm font-semibold'>Contato:</p>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="ex: 11999999999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-3 rounded-2xl bg-white text-gray-500 border-yellow-300 border-2 outline-none text-sm "
                        required
                    />
                    <p className='ml-2 mt-4 text-gray-500 text-sm font-semibold'>Mensagem (opcional)</p>
                    <textarea
                        name="resposta"
                        placeholder="Escreva algo de sua preferência"
                        value={formData.resposta}
                        onChange={handleChange}
                        className="p-3 rounded-2xl bg-white text-gray-500 border-yellow-300 border-2 outline-none text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-2xl hover:bg-yellow-500 transition disabled:opacity-60 my-6 cursor-pointer"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <div className="flex justify-center items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white border-t-yellow-400 rounded-full animate-spin"></span>
                                Enviando...
                            </div>
                        ) : (
                            'Enviar'
                        )}
                    </button>

                    {/* Mensagens animadas */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-green-500 font-medium text-sm mt-2 text-center"
                            >
                                Enviado com sucesso, Entraremos em contato em breve!
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 font-medium text-sm mt-2 text-center"
                            >
                                Falha ao enviar. Tente novamente.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
        </div>
    )
}
