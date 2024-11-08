import React from 'react'

type TermsAndContent = {
  content: JSX.Element
}

const defaultTermsAndContent: Partial<TermsAndContent> = {
  content: (
    <>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>1.</span>
          Interpretation.
        </h5>
        <p className='text-lg text-[#6d6d6d]'>
          In these Terms: <br />
          • “BUYER” means the person who accepts the Seller’s written quotation for the sale of the Goods or whose
          written order for the Goods is accepted by the Seller.
          <br />
          • “GOODS” means the goods and services (including any installment of the goods and services or any parts for
          them), which the Seller is to supply in accordance with these Terms.
          <br />• “SELLER” means XCUTS Ltd, registered in England and Wales under number 14518766.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>2.</span> Basis of the Sale
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The Seller shall sell, and the Buyer shall purchase, the Goods in accordance with the Seller’s written
          quotation, subject to these terms, which shall govern the contract to the exclusion of any other terms subject
          to which any such quotation is accepted or appears to be accepted, or any such order is made or appears to be
          made, by the Buyer.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          No variation to these terms shall be binding unless agreed in writing between the authorised representatives
          of the Buyer and the Seller.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The Seller’s employees or agents are not authorised to make any representations concerning the Goods unless
          confirmed by the Seller in writing. In entering into the Contract, the Buyer acknowledges that it does not
          rely on, and waives any claim for breach of, any such representations that are not so confirmed.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          Any advice or recommendation given by the Seller or its employees or agents to the Buyer or its employees or
          agents as to the storage, application, or use of the Goods which is not confirmed in writing by the Seller is
          followed or acted upon entirely at the Buyer’s own risk, and accordingly, the Seller shall not be liable for
          any such advice or recommendation which is not so confirmed.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          Any typographical, clerical, or other error or omission in any sales literature, quotation, price list,
          acceptance of offer, invoice, or other document or information issued by the Seller shall be subject to
          correction without any liability on the part of the Seller.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>3.</span> Orders and specification.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          No order submitted by the Buyer shall be deemed to be accepted by the Seller unless and until confirmed by the
          Seller’s authorised representative.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The Buyer shall be responsible to the Seller for ensuring the accuracy of the terms of any order (including
          any applicable specification) submitted by the Buyer and for giving the Seller any necessary information
          relating to the Goods within a sufficient time to enable the Seller to perform the Contract in accordance with
          its terms.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The quantity, quality, and description of the Goods and any specification for them shall be as set out in the
          Seller’s quotation or the Buyer’s order, and the Buyer shall have sole responsibility for the accuracy of the
          specification of the Goods.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          If the Goods are to be manufactured or any process is to be applied to the Goods by the Seller in accordance
          with a specification submitted by the Buyer, the Buyer shall indemnify the Seller against all loss, damages,
          costs, and expenses awarded against or incurred by the Seller in connection with, or paid or agreed to be paid
          by the Seller in settlement of, any claim for infringement of any patent, copyright, design, trademark, or
          other industrial or intellectual property rights of any other person which results from the Seller’s use of
          the Buyer’s specification.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The Seller reserves the right to make any changes in the specification of the Goods which are required to
          conform with any applicable statutory or EU requirements, or where the Goods are to be supplied to the
          Seller’s specification, which do not materially affect their quality or performance.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          No order which has been accepted by the Seller may be cancelled by the Buyer except with the agreement in
          writing of the Seller and on terms that the Buyer shall indemnify the Seller in full against all loss
          (including loss of profit), costs (including the cost of all labor and materials used), damages, charges, and
          expenses incurred by the Seller as a result of cancellation.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>4.</span> Price of the goods.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The price of the Goods shall be the Seller’s quoted price. The Seller reserves the right, by giving written
          notice to the Buyer at any time before delivery, to increase the price of the Goods to reflect any increase in
          the cost to the Seller which is due to any factor beyond the control of the Seller (such as, without
          limitation, any foreign exchange fluctuation, currency regulation, alteration of duties, significant increase
          in the costs of labor, materials or other costs of manufacture), any change in delivery dates, quantities, or
          specifications for the Goods which are requested by the Buyer, or any delay caused by any instructions of the
          Buyer or failure of the Buyer to give the Seller adequate information or instructions.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          All prices given by the Seller are exclusive of carriage charges, and where the Seller agrees to deliver the
          Goods otherwise than at the Seller’s premises, the Buyer shall be liable to pay the Seller’s charges for
          transport, packaging, and insurance unless agreed otherwise in writing.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          The price is exclusive of any applicable value-added tax, which the Buyer shall be additionally liable to pay
          to the Seller.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>5.</span> Terms of payment.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          Unless subject to any special terms agreed in writing between the Buyer and the Seller, the Buyer will pay the
          Seller for the price of the Goods upon order placement and after the Buyer has confirmed and accepted the
          Seller’s quotation specification and its terms.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          Failure to pay the price of the Goods in full within the specified quotation validity time will annul the
          quotation.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          No order will be deemed to have been placed and no contract between the Seller and the Buyer will be deemed to
          have been made before the Goods are paid for in full and until confirmed by the Seller’s authorised
          representative unless otherwise agreed in writing.
        </p>
      </div>
    </>
  )
}

export default function TermsContent(props: any) {
  const Data: TermsAndContent = {
    ...defaultTermsAndContent,
    ...props.Data
  }
  // console.log(Data)
  return (
    <section className='md:py-20 py-10'>
      <div className='px-4 sm:container'>
        <div className='relative py-5 px-5 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-primary before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10'>
          <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
            Commercial Terms & Conditions of Sale of Goods and Services
          </h1>
        </div>
        {Data?.content}
      </div>
    </section>
  )
}
