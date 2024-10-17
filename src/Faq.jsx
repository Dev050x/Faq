import React from 'react'
import FaqComponent from './FaqComponent'

const Faq = () => {
  
    const faqs = [
        { question: "What is Kitter?", answer: "Kitter is an e-commerce platform for pet products." },
        { question: "How can I place an order?", answer: "You can place an order through the website after signing in." },
        { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, and PayPal." },
        { question: "Do you offer international shipping?", answer: "Yes, international shipping is available." }
    ]
  return (
    <div className='Faq-Box'>
        
        {faqs.map((faq,ind) => {
            return <FaqComponent faq = {faq} index = {ind} />
        })}
    </div>
  )
}

export default Faq
