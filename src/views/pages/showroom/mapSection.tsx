import React from 'react'

export default function MapSection() {
  return (
    <section>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.0861021493192!2d-0.24476969999999998!3d51.7680331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763bed5f984847%3A0x449b1ca5b7d52def!2sXCUTS!5e0!3m2!1sen!2suk!4v1710348707213!5m2!1sen!2suk'
        width='100%'
        height='620'
        style={{ border: '0' }}
        // allowfullscreen=''
        loading='lazy'
        // referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  )
}
