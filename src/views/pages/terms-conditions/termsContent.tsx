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
          1.1 In these Terms: <br />
          “BUYER” means the person who accepts the Seller’s written quotation for the sale of the Goods or whose written
          order for the Goods is accepted by the Seller
          <br />
          “GOODS” means the goods and services (including any installment of the goods and services or any parts for
          them), which the Seller is to supply in accordance with these Terms.
          <br />
          "SELLER” means C Workshop Ltd, registered in England and Wales under number 07227663.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>2.</span> Basis of the sale.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          2.1 The Seller shall sell and the Buyer shall purchase the Goods in accordance with the Seller’s written
          quotation subject to these terms, which shall govern the contract to the exclusion of any other terms subject
          to which any such quotation is accepted or appears to be accepted, or any such order is made or appears to be
          made, by the Buyer.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          2.2 No variation to these terms shall be binding unless agreed in writing between the authorised
          representatives of the Buyer and the Seller.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          {' '}
          2.3 The Seller’s employees or agents are not authorised to make any representations concerning the Goods
          unless confirmed by the Seller in writing. In entering into the Contract, the Buyer acknowledges that it does
          not rely on, and waives any claim for breach of, any such representations that are not so confirmed.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          2.4 Any advice or recommendation given by the Seller or its employees or agents to the Buyer or it employees
          or agents as to the storage, application or use of the Goods which is not confirmed in writing by the Seller
          is followed or acted upon entirely at the Buyer’s own risk, and accordingly the Seller shall not be liable for
          any such advice or recommendation which is not so confirmed.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          2.5 Any typographical, clerical or other error or omission in any sales literature, quotation, price list,
          acceptance of offer, invoice or other document or information issued by the Seller shall be subject to
          correction without any liability on the part of the Seller.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>3.</span> Orders and specification.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.1 No order submitted by the Buyer shall be deemed to be accepted by the Seller unless and until confirmed by
          the Seller’s authorised representative.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.2 The Buyer shall be responsible to the Seller for ensuring the accuracy of the terms of any order
          (including any applicable specification) submitted by the Buyer and for giving the Seller any necessary
          information relating to the Goods within a sufficient time to enable the Seller to perform the Contract in
          accordance with its terms.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.3 The quantity, quality and description of the Goods and any specification for them shall be as set out in
          the Seller’s quotation or the Buyer’s order and the Buyer shall have sole responsibility for the accuracy of
          the specification of the Goods.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.4 If the Goods are to be manufactured or any process is to be applied to the Goods by the Seller in
          accordance with a specification submitted by the Buyer, the Buyer shall indemnify the Seller against all loss,
          damages, costs and expenses awarded against or incurred by the Seller in connection with, or paid or agreed to
          be paid by the Seller in settlement of, any claim for infringement of any patent, copyright, design, trade
          mark or other industrial or intellectual property rights of any other person which results from the Seller’s
          use of the Buyer’s specification.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.5 The Seller reserves the right to make any changes in the specification of the Goods which are required to
          conform with any applicable statutory or E.U. requirements or, where the Goods are to be supplied to the
          Seller’s specification, which do not materially affect their quality or performance.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          3.6 No order which has been accepted by the Seller may be cancelled by the Buyer except with the agreement in
          writing of the Seller and on terms that the Buyer shall indemnify the Seller in full against all loss
          (including loss of profit), costs (including the cost of all labour and materials used), damages, charges and
          expenses incurred by the Seller as a result of cancellation.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>4.</span> Price of the goods.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          4.1 The price of the Goods shall be the Seller's quoted price. The Seller reserves the right, by giving
          written notice to the Buyer at any time before delivery, to increase the price of the Goods to reflect any
          increase in the cost to the Seller which is due to any factor beyond the control of the Seller (such as,
          without limitation, any foreign exchange fluctuation, currency regulation, alteration of duties, significant
          increase in the costs of labour, materials or other costs of manufacture), any change in delivery dates,
          quantities or specifications for the Goods which is requested by the Buyer, or any delay caused by any
          instructions of the Buyer or failure of the Buyer to give the Seller adequate information or instructions.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          4.2 All prices given by the Seller are exclusive of carriage charges, and where the Seller agrees to deliver
          the Goods otherwise than at the Seller’s premises, the Buyer shall be liable to pay the Seller’s charges for
          transport, packaging and insurance unless agreed otherwise in writing.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          4.3 The price is exclusive of any applicable value added tax, which the Buyer shall be additionally liable to
          pay to the Seller.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>5.</span> Terms of payment.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          5.1 Unless subject to any special terms agreed in writing between the Buyer and the Seller, the Buyer will pay
          the Seller for the price of the Goods upon order placement and after the Buyer has confirmed and accepted
          Seller’s quotation specification and its terms.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          5.2 Failure to pay the price of the Goods in full within specified quotation validity time will annul the
          quotation.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          5.3 No order will be deemed to have been placed and no contract between the Seller and the Buyer will be
          deemed have been made before the Goods are paid for in full and until confirmed by the Seller’s authorised
          representative, unless otherwise agreed in writing.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>6.</span> Delivery and storage.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          6.1 Delivery of the Goods shall be made by the Buyer collecting the Goods at the Seller’s premises at any time
          after the Seller has notified the Buyer that the Goods are ready for collection or, if some other place for
          delivery is agreed by the Seller, by the Seller delivering the Goods to that place.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          6.2 Any dates quoted for delivery of the Goods are approximate only and the Seller shall not be liable for any
          delay in delivery of the Goods however caused. Time for delivery shall not constitute breach of the Contract.
          The Goods may be delivered by the Seller in advance of the quoted delivery date on giving reasonable notice to
          the Buyer.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          6.3 Where the Goods are to be delivered in installments, each delivery shall constitute a separate contract
          and failure by the Seller to deliver any one or more of the installments in accordance with these Terms or any
          claim by the Buyer in respect of any one or more installments shall not entitle the Buyer to treat the
          Contract as a whole to be unfulfilled.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          6.4 If the Seller fails to deliver the Goods (or any installment) for any reason other than any cause beyond
          the Seller’s reasonable control or the Buyer’s fault, and the Seller is accordingly liable to the Buyer, the
          Seller’s liability shall be limited to and will not exceed the cost to the Buyer (in the cheapest available
          market) of similar goods to replace those not delivered.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          6.5 If the Buyer fails to take delivery of the Goods or fails to give the Seller adequate delivery
          instructions at the time stated for delivery (otherwise than by reason of any cause beyond the Buyer’s
          reasonable control or by reason of the Seller’s fault) then, without limiting any other right or remedy
          available to the Seller, the Seller may:
        </p>

        <div className='pl-10'>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            6.5.1 store the Goods until actual delivery and charge the Buyer for the reasonable costs (including
            insurance) of storage;{' '}
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>or</p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            6.5.2 sell the Goods at the best price readily obtainable and (after deducting all reasonable storage and
            selling expenses) account to the Buyer for the excess over the price under the Contract or charge the Buyer
            for any shortfall below the price under the Contract.
          </p>
        </div>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>7.</span> Risks and property.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.1 Risk of damage to or loss of the Goods shall pass to the Buyer following a successful delivery of the
          Goods to Buyer’s specified address or, if the Buyer wrongfully fails to take delivery of the Goods, from the
          time when the Seller has attempted delivery of the Goods.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.2 Regardless of delivery and the passing of risk in the Goods, or any other provision of these Terms, the
          property and title in the Goods shall not pass to the Buyer until the Seller has received in cash or cleared
          funds payment in full of the price of the Goods and all other goods agreed to be sold by the Seller to the
          Buyer for which payment is then due.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.3 Until such time as the property and title in the Goods passes to the Buyer, the Buyer shall hold the Goods
          as the Seller’s trusted agent and bailee, and shall keep the Goods separate from those of the Buyer and third
          parties and properly stored, protected and insured and identified as the Seller’s property, but the Buyer may
          resell or use the Goods in the ordinary course of its business.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.4 Until such time as the property and title in the Goods passes to the Buyer (and provided the Goods are
          still in existence and have not been resold), the Seller may at any time require the Buyer to deliver up the
          Goods to the Seller and, if the Buyer fails to do so forthwith, enter on any premises of the Buyer or any
          third party where the Goods are stored and repossess the Goods.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.5 The Buyer shall not be entitled to pledge or in any way use as a security for any indebtedness any of the
          Goods which remain the property and title of the Seller, but if the Buyer does so all moneys owing by the
          Buyer to the Seller shall (without limiting any other right or remedy of the Seller) immediately become due
          and payable.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.6 For the avoidance of doubt, nothing contained in this Clause 7 shall entitle the Buyer to return any of
          the Goods to the Seller save as expressly provided in these terms and conditions or as expressly agreed in
          writing between the Seller and the Buyer.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>8.</span> Warranties and liability.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.1 Subject to the following provisions the Seller warrants that the Goods will correspond with their
          specification subject to such tolerances as are reasonable and as are normally accepted in the trade and will
          be free from defects in material and workmanship at the time of delivery.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.2 The above warranty is given by the Seller subject to the following conditions:
        </p>
        <div className='pl-10'>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.2.1 the Seller shall be under no liability in respect of any defect in the Goods arising from any drawing,
            design or specification supplied by the Buyer;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.2.2 the Seller shall be under no liability in respect of any defect arising from fair wear and tear,
            wilful damage, negligence, abnormal working conditions, failure to follow the Seller’s instructions (whether
            oral or in writing), misuse or alteration or repair of the Goods without the Seller’s approval;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.2.3 the Seller shall be under no liability under the above warranty (or any other warranty, condition or
            guarantee) if the total price for the Goods has not been paid by the due date for payment;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.2.4 the above warranty does not extend to parts, materials or equipment not manufactured by the Seller, in
            respect of which the Buyer shall only be entitled to the benefit of any such warranty or guarantee, as is
            given by the manufacturer to the Seller.
          </p>
        </div>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.3 Subject as expressly provided in these Terms, and except where the Goods are sold to a person dealing as a
          consumer (within the meaning of the Unfair Contract Terms Act 1977), all warranties, conditions or other terms
          implied by statute or common law are excluded to the fullest extent permitted by law.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.4 Where the Goods are sold under a consumer transaction (as defined by the Consumer Transactions
          (Restrictions on Statements) Order 1976 the statutory rights of the Buyer are not affected by these
          Conditions.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.5 Any claim by the Buyer which is based on any defect in the quality or condition of the Goods or their
          failure to correspond with specification shall (whether or not delivery is refused by the Buyer) be notified
          to the Seller within three days from the date of delivery or (where the defect or failure was not apparent on
          reasonable inspection) within a reasonable time after discovery of the defect or failure. If delivery is not
          refused, and the Buyer does not notify the Seller accordingly, the Buyer shall not be entitled to reject the
          Goods and the Seller shall have no liability for such defect or failure, and the Buyer shall be bound to pay
          the price as if the Goods had been delivered in accordance with the Contract.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.6 Any claim by the Buyer which is based on short delivery or non-delivery shall be notified to the Seller in
          writing (in the case of short delivery) within 7 days of delivery and (in the case of non-delivery) within 14
          days of receipt by the Buyer of the Seller’s Invoice for the goods which the Buyer claims have not been
          delivered. If the Buyer does not notify the Seller accordingly the Buyer shall not be entitled to reject any
          goods that have been delivered and the Seller shall have no liability for such short delivery or non-delivery.
          Where a valid claim in respect of any of the Goods which is based on a defect in the quality or condition of
          the Goods or their failure to meet specification is notified to the Seller in accordance with these Terms, the
          Seller may replace the Goods (or the part in question) free of charge or, at the Seller’s sole discretion,
          refund to the Buyer the price of the Goods (or a proportionate part of the price), in which case the Seller
          shall have no further liability to the Buyer.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.7 Except in respect of death or personal injury caused by the Seller’s negligence, or damage arising from
          defective products under the Consumer Protection Act 1987, the Seller shall not be liable to the Buyer by
          reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any
          duty at common law, or under the express terms of the Contract, for loss of profit or for any indirect,
          special or consequential loss or damage, costs, expenses or other claims for compensation whatsoever (whether
          caused by the negligence of the Seller, its employees or agents or otherwise) which arise out of or in
          connection with the supply of the Goods (including any delay in supplying or any failure to supply the Goods
          in accordance with the Contract or at all) or their use or resale by the Buyer, and the entire liability of
          the Seller under or in connection with the Contract shall not exceed the price of the Goods, except as
          expressly provided in these Terms.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          8.8 The Seller shall not be liable to the Buyer or be deemed to be in breach of the Contract by reason of any
          delay in performing, or any failure to perform, any of the Seller's obligations if the delay or failure was
          due to any cause beyond the Seller's reasonable control. The following shall be regarded as causes beyond the
          Seller’s reasonable control:
        </p>
        <div className='pl-10'>
          <p className='text-lg text-[#6d6d6d] mb-3'>8.8.1 Act of God, explosion, flood, tempest, fire or accident;</p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.8.2 war or threat of war, sabotage, insurrection, civil disturbance or requisition;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.8.3 acts, restrictions, regulations, bye-laws, prohibitions or measures of any kind on the part of the
            governmental, parliamentary or local authority;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>8.8.4 import or export regulations or embargoes;</p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.8.5 strikes, lockouts or other industrial actions or trade disputes whether involving employees of the
            Seller or of a third party;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            8.8.6 difficulties in obtaining raw materials, labour, fuel, parts or machinery;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>8.8.7 power failure or breakdown in machinery.</p>
        </div>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>9.</span> Insolvency of buyer.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>9.1 This clause 9 applies if:</p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          7.2 Regardless of delivery and the passing of risk in the Goods, or any other provision of these Terms, the
          property and title in the Goods shall not pass to the Buyer until the Seller has received in cash or cleared
          funds payment in full of the price of the Goods and all other goods agreed to be sold by the Seller to the
          Buyer for which payment is then due.
        </p>
        <div className='pl-10'>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            9.1.1 the Buyer makes a voluntary arrangement with its creditors or (being an individual or firm) becomes
            bankrupt or (being a company) becomes subject to an administration order or goes into liquidation (otherwise
            than for the purposes of amalgamation or reconstruction); or
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            9.1.2 an encumbrancer takes possession, or a receiver is appointed, of any of the property or assets of the
            Buyer; or
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            9.1.3 the Buyer ceases, or threatens to cease, to carry on business; or
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            9.1.4 the Seller reasonably understands that any of the events mentioned above is about to occur in relation
            to the Buyer and notifies the Buyer accordingly.
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            9.1.5 If this clause applies then, without limiting any other right or remedy available to the Seller, the
            Seller may cancel the Contract or suspend any further deliveries under the Contract without any liability to
            the Buyer, and if the Goods have been delivered but not paid for the price shall become immediately due and
            payable regardless of any previous agreement or arrangement to the contrary.
          </p>
        </div>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>10.</span> Export terms.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          10.1 The Buyer shall be responsible for complying with any legislation or regulations governing the
          importation of the Goods into the country of destination and for the payment of any duties on them.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          10.2 Unless otherwise agreed in writing between the Buyer and the Seller, the Goods shall be delivered FOB
          from sea port of shipment and the Seller shall be under no obligation to give notice under section 32(3) of
          the Sale of Goods Act 1979.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          10.3 The Buyer shall be responsible for arranging for testing and inspection of the Goods at the Seller’s
          premises before shipment. The Seller shall have no liability for any claim in respect of any defect in the
          Goods which would be apparent on inspection and which is made after shipment, or in respect of any damage
          during transit.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          10.4 Payment of all amounts due to the Seller shall be made in such manner as shall be agreed between the
          Seller and the Buyer in writing.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>11.</span> Returns and refunds.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          11.1 The Buyer has 14 days from the day of purchase or receipt of Goods to return them to the Seller and will
          receive a refund if the Goods:
        </p>

        <div className='pl-10'>
          <p className='text-lg text-[#6d6d6d] mb-3'>
            11.1.1 were not made to the Buyer’s specification, which, due to their bespoke nature, cannot be returned
            and refunded for;
          </p>
          <p className='text-lg text-[#6d6d6d] mb-3'>11.1.2 are undamaged and in good condition;</p>
          <p className='text-lg text-[#6d6d6d] mb-3'>11.1.3 have not been altered or used.</p>
        </div>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          11.2 The Seller reserves the right to charge restocking charge of up to 25% of the returned Goods value.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          11.3 The Buyer will receive his refund within 14 days from the day the returned goods have been accepted. The
          refund will be made using the original payment method.
        </p>
      </div>
      <div className='pl-10 relative my-5'>
        <h5 className='text-xl font-semibold mb-3'>
          <span className='absolute left-0'>12.</span> General.
        </h5>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          12.1 Any notice required or permitted to be given by either party to the other under these Terms shall be in
          writing addressed to that other party at its registered office or principal place of business or such other
          address as may at the relevant time have been notified, in accordance with this provision, to the party giving
          the notice.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          12.2 No waiver by the Seller of any breach of the Contract by the Buyer shall be considered as a waiver of any
          subsequent breach of the same or any other provision.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          12.3 If any provision of the Contract is held by a court or other competent authority to be invalid or
          unenforceable in whole or in part the validity of the other provisions of the Contract and the remainder of
          the provision in question shall not be affected.
        </p>
        <p className='text-lg text-[#6d6d6d] mb-3'>
          12.4 The Contract shall be governed by the laws of England, and the Buyer agrees to submit to the nonexclusive
          jurisdiction of the English courts.
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
  console.log(Data)
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
