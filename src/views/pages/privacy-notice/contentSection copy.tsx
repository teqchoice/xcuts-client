import React from 'react'

type TOurGuarantee = {
  text1: string
  image: string
  text2: string
  questions: TQuestion[]
}

type TQuestion = {
  q: string
  a: string
}

const defaultTOurGuarantee: Partial<TOurGuarantee> = {
  text1:
    "We will cut and edge panels to your exact specification, or we'll send a replacement to you free of charge in 24hrs.",
  image: 'images/wwcaep-panels.webp',
  text2:
    "Here at Xcuts, we understand that humans (and machines) can sometimes make mistakes and things don't entirely turn out the way you want them. We don't like the idea of our customers being stuck on the job. That is why we will provide you with a replacement panel within 24 hours in the unlikely event we didn't get it right from the get-go.",
  questions: [
    {
      q: 'What happens when Xcuts gets it wrong?',
      a: 'Simple. As soon as you notice an issue with your cut and edged panel, get in touch with us by twelve noon and we will send you a free replacement before midday on the next working day.'
    },
    {
      q: 'What about CNC and Spray coating?',
      a: "These services are very involved and time-consuming therefore we can't always guarantee that you will get it within 24 hours, but we will do our best. After all, good things are worth the wait."
    },
    {
      q: 'What if the manufacturer gets it wrong?',
      a: "Occasionally boards have a manufacturing fault, and if we don't spot it on time before it makes its way to you, we will aim to rectify this as soon as possible. Doing so might sometimes take longer than 24 hours but don't worry, we are here to help."
    },
    {
      q: 'Delivery or Collection?',
      a: "We're easy. Should you happen to be around the corner and would prefer to pick up your replacement panel and save even more time that's fine with us. Otherwise, we'll deliver it to you."
    }
  ]
}

export default function ContentSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='md:py-20 py-10 text-[#6d6d6d]'>
        <div className='px-4 sm:container'>
          <div className='text-center mb-10'>
            <p className='mb-4'>
              This privacy notice applies between you, the User of this Website and
              <span className='text-primary'>X</span>
              <span className='text-black'>cuts</span>, the owner and provider of this Website.
              <span className='text-primary'>X</span>
              <span className='text-black'>cuts</span> Ltd takes the privacy of your information very seriously. This
              privacy notice applies to our use of any and all Data collected by us or provided by you in relation to
              your use of the Website.
            </p>
            <p className='mb-4'>
              This privacy notice should be read alongside, and in addition to, our Terms and Conditions, which can be
              found at: <span className='text-primary'>X</span>
              <span className='text-black'>cuts</span>.co.uk/terms-and-conditions.
            </p>
            <p className='mb-4'>Please read this privacy notice carefully.</p>
          </div>
          <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10'>
            <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
              Definitions and interpretation
            </h2>
          </div>
          <div className='relative my-5'>
            <h5 className='text-lg text-black font-semibold mb-5'>
              1. In this privacy notice, the following definitions are used:
            </h5>
            <table className='table-auto'>
              <tbody>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Data
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    collectively all information that you submit to C Workshop Ltd via the Website. This definition
                    incorporates, where applicable, the definitions provided in the Data Protection Laws;
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Cookies
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    a small text file placed on your computer by this Website when you visit certain parts of the
                    Website and/or when you use certain features of the Website. Details of the cookies used by this
                    Website are set out in the clause below (Cookies);
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Data Protection Laws
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    any applicable law relating to the processing of personal Data, including but not limited to the
                    Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws,
                    regulations and secondary legislation, for as long as the GDPR is effective in the UK;
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    GDPR
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    the General Data Protection Regulation (EU) 2016/679;
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Xcuts Ltd, we or us
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    Xcuts Ltd, a company incorporated in England and Wales with registered number 0722 7663 whose
                    registered office is at Unit D, Elstree Trade Park, Chester Road, Hertfordshire, WD6 1GJ;
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    UK and EU Cookie Law
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy
                    and Electronxic Communications (EC Directive) (Amendment) Regulations 2011;
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    User or you
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    any third party that accesses the Website and is not either (i) employed by Xcuts Ltd and acting in
                    the course of their employment or (ii) engaged as a consultant or otherwise providing services to
                    Xcuts Ltd and accessing the Website in connection with the provision of such services; and
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-b border-[#e7e7e7]'>
                    Website
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-b border-[#e7e7e7]'>
                    the website that you are currently using, Xcuts.co.uk, and any sub-domains of this site unless
                    expressly excluded by their own terms and conditions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='my-8'>
            <h5 className='text-lg text-black font-semibold mb-3'>
              2. In this privacy notice, unless the context requires a different interpretation
            </h5>
            <p className='mb-3'>1. the singular includes the plural and vice versa;</p>
            <p className='mb-3'>
              2. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or
              appendices of this privacy notice;
            </p>
            <p className='mb-3'>
              3. a reference to a person includes firms, companies, government entities, trusts and partnerships;{' '}
            </p>
            <p className='mb-3'>4.”including" is understood to mean "including without limitation";</p>
            <p className='mb-3'>
              5. reference to any statutory provision includes any modification or amendment of it;
            </p>
            <p className='mb-3'>6. the headings and sub-headings do not form part of this privacy notice.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Scope of this privacy notice
              </h2>
            </div>
            <p className='mb-3'>
              1. This privacy notice applies only to the actions of C Workshop Ltd and Users with respect to this
              Website. It does not extend to any websites that can be accessed from this Website including, but not
              limited to, any links we may provide to social media websites
            </p>
            <p className='mb-3'>
              2.For purposes of the applicable Data Protection Laws, C Workshop Ltd is the "data controller". This means
              that C Workshop Ltd determines the purposes for which, and the manner in which, your Data is processed
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Data collected
              </h2>
            </div>
            <p className='mb-3'>1. We may collect the following Data, which includes personal Data, from you:</p>
            <p className='mb-3 pl-5'>1. name;</p>
            <p className='mb-3 pl-5'>2. contact information such as email addresses and telephone numbers;</p>
            <p className='mb-3'>In each case, in accordance with this privacy notice.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                How we collect Data
              </h2>
            </div>
            <p className='mb-3'>1. We collect Data in the following ways</p>
            <p className='mb-3 pl-5'>1. data is given to us by you; and</p>
            <p className='mb-3 pl-5'>2. data is collected automatically.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Data that is given to us by you
              </h2>
            </div>
            <p className='mb-3'>1. C Workshop Ltd will collect your Data in a number of ways, for example:</p>
            <p className='mb-3 pl-5'>
              1. when you contact us through the Website, by telephone, post, e-mail or through any other means;
            </p>
            <p className='mb-3 pl-5'>
              2. when you register with us and set up an account to receive our products and services;
            </p>
            <p className='mb-3 pl-5'>3. when you make payments to us, through this Website or otherwise;</p>
            <p className='mb-3 pl-5'>4. when you use our services.</p>
            <p className='mb-3'>In each case, in accordance with this privacy notice.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Data that is collected automatically
              </h2>
            </div>
            <p className='mb-3'>
              1. To the extent that you access the Website, we will collect your Data automatically, for example:
            </p>
            <p className='mb-3 pl-5'>
              1. we automatically collect some information about your visit to the Website. This information helps us to
              make improvements to Website content and navigation, and includes your IP address, the date, times and
              frequency with which you access the Website and the way you use and interact with its content;
            </p>
            <p className='mb-3 pl-5'>
              2. we will collect your Data automatically via cookies, in line with the cookie settings on your browser.
              For more information about cookies, and how we use them on the Website, see the section below, headed
              "Cookies".
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Our use of Data
              </h2>
            </div>
            <p className='mb-3'>
              1. Any or all of the above Data may be required by us from time to time in order to provide you with the
              best possible service and experience when using our Website. Specifically, Data may be used by us for the
              following reasons:
            </p>
            <p className='mb-3 pl-5'>1. internal record keeping;</p>
            <p className='mb-3 pl-5'>2. improvement of our products and services;</p>
            <p className='mb-3 pl-5'>3. transmission by email of marketing materials that may be of interest to you;</p>
            <p className='mb-3 pl-5'>
              4. contact for market research purposes which may be done using email, telephone or mail. Such information
              may be used to customise or update the Website.
            </p>
            <p className='mb-3'>
              2. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate
              interests. If you are not satisfied with this, you have the right to object in certain circumstances (see
              the section headed "Your rights" below).
            </p>
            <p className='mb-3'>
              3. For the delivery of direct marketing to you via e-mail, we'll need your consent, whether via an opt-in
              or soft-opt-in:
            </p>
            <p className='mb-3 pl-5'>
              1. soft opt-in consent is a specific type of consent which applies when you have previously engaged with
              us (for example, you contact us to ask us for more details about a particular product/service, and we are
              marketing similar products and services). Under "soft opt-in" consent, we will take your consent as given
              unless you opt-out.
            </p>
            <p className='mb-3 pl-5'>
              2. for other types of e-marketing, we are required to obtain your explicit consent; that is, you need to
              take positive and affirmative action when consenting by, for example, checking a tick box that we'll
              provide.
            </p>
            <p className='mb-3 pl-5'>
              3. if you are not satisfied about our approach to marketing, you have the right to withdraw consent at any
              time. To find out how to withdraw your consent, see the section headed "Your rights" below.
            </p>
            <p className='mb-3'>
              4. When you register with us and set up an account to receive our services, the legal basis for this
              processing is the performance of a contract between you and us and/or taking steps, at your request, to
              enter into such a contract.
            </p>
            <p className='mb-3'>In each case, in accordance with this privacy notice.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Who we share Data with
              </h2>
            </div>
            <p className='mb-3'>
              1. We may share your Data with the following groups of people for the following reasons:
            </p>
            <p className='mb-3 pl-5'>
              1. our employees, agents and/or professional advisors - to carry out day-to-day tasks of selling,
              manufacturing and delivering purchased goods and services to customers.
            </p>
            <p className='mb-3'>2In each case, in accordance with this privacy notice.</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Keeping Data secure
              </h2>
            </div>
            <p className='mb-3'>
              1. We will use technical and organisational measures to safeguard your Data, for example:
            </p>
            <p className='mb-3 pl-5'>
              1. access to your account is controlled by a password and a user name that is unique to you;
            </p>
            <p className='mb-3 pl-5'>2. we store your Data on secure servers.</p>
            <p className='mb-3'>
              2. Technical and organisational measures include measures to deal with any suspected data breach. If you
              suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by
              contacting us via this e-mail address: privacy @ Xcuts co uk.
            </p>
            <p className='mb-3'>
              3. If you want detailed information from Get Safe Online on how to protect your information and your
              computers and devices against fraud, identity theft, viruses and many other online problems, please visit
              www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Data retention
              </h2>
            </div>
            <p className='mb-3'>
              1. Unless a longer retention period is required or permitted by law, we will only hold your Data on our
              systems for the period necessary to fulfil the purposes outlined in this privacy notice or until you
              request that the Data be deleted.
            </p>
            <p className='mb-3'>
              2. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory
              purposes.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Your rights
              </h2>
            </div>
            <p className='mb-3'>1. You have the following rights in relation to your Data:</p>
            <p className='mb-3 pl-5'>
              1. Right to access - the right to request (i) copies of the information we hold about you at any time, or
              (ii) that we modify, update or delete such information. If we provide you with access to the information
              we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or
              excessive." Where we are legally permitted to do so, we may refuse your request. If we refuse your
              request, we will tell you the reasons why;
            </p>
            <p className='mb-3 pl-5'>
              2. Right to correct - the right to have your Data rectified if it is inaccurate or incomplete;
            </p>
            <p className='mb-3 pl-5'>
              3. Right to erase - the right to request that we delete or remove your Data from our systems;
            </p>
            <p className='mb-3 pl-5'>
              4. Right to restrict our use of your Data - the right to "block" us from using your Data or limit the way
              in which we can use it;
            </p>
            <p className='mb-3 pl-5'>
              5. Right to data portability - the right to request that we move, copy or transfer your Data;
            </p>
            <p className='mb-3 pl-5'>
              6. Right to object - the right to object to our use of your Data including where we use it for our
              legitimate interests.
            </p>
            <p className='mb-3'>
              2. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the
              processing of your Data (where consent is our legal basis for processing your Data), please contact us via
              this e-mail address: privacy @ Xcuts co uk.
            </p>
            <p className='mb-3'>
              3. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us,
              you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the
              Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at
              https://ico.org.uk.
            </p>
            <p className='mb-3'>
              4. It is important that the Data we hold about you is accurate and current. Please keep us informed if
              your Data changes during the period for which we hold it.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Links to other websites
              </h2>
            </div>
            <p className='mb-3'>
              1. This Website may, from time to time, provide links to other websites. We have no control over such
              websites and are not responsible for the content of these websites. This privacy notice does not extend to
              your use of such websites. You are advised to read the privacy notice or statement of other websites prior
              to using them.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Changes of business ownership and control
              </h2>
            </div>
            <p className='mb-3'>
              1. C Workshop Ltd may, from time to time, expand or reduce our business and this may involve the sale
              and/or the transfer of control of all or part of C Workshop Ltd. Data provided by Users will, where it is
              relevant to any part of our business so transferred, be transferred along with that part and the new owner
              or newly controlling party will, under the terms of this privacy notice, be permitted to use the Data for
              the purposes for which it was originally supplied to us.
            </p>
            <p className='mb-3'>
              2. We may also disclose Data to a prospective purchaser of our business or any part of it.
            </p>
            <p className='mb-3'>
              3. In the above instances, we will take steps with the aim of ensuring your privacy is protected.
            </p>
          </div>
          <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
            <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
              Cookies
            </h2>
          </div>
          <div className='relative my-5'>
            <table className='table-auto mb-9'>
              <tbody>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t  border-[#e7e7e7]'>
                    Type of Cookie
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>Purpose</td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Strictly necessary cookies
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>
                    These are cookies that are required for the operation of our website. They include, for example,
                    cookies that enable you to log into secure areas of our website, use a shopping cart or make use of
                    e-billing services.
                  </td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-b border-[#e7e7e7]'>
                    Analytical/performance cookies
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-b border-[#e7e7e7]'>
                    They allow us to recognise and count the number of visitors and to see how visitors move around our
                    website when they are using it. This helps us to improve the way our website works, for example, by
                    ensuring that users are finding what they are looking for easily.
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='mb-3'>
              1. This Website may place and access certain Cookies on your computer. C Workshop Ltd uses Cookies to
              improve your experience of using the Website and to improve our range of products and services. C Workshop
              Ltd has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and
              respected at all times.
            </p>
            <p className='mb-3'>
              2. All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.
            </p>
            <p className='mb-3'>
              3. Before the Website places Cookies on your computer, you will be presented with a message bar requesting
              your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling C
              Workshop Ltd to provide a better experience and service to you. You may, if you wish, deny consent to the
              placing of Cookies; however certain features of the Website may not function fully or as intended.
            </p>
            <p className='mb-3'>
              4. This Website may place some Cookies on your computer. You can find a list of Cookies that we use in the
              Cookies Schedule.
            </p>
            <p className='mb-3'>
              5. You can choose to enable or disable Cookies in your internet browser. By default, most internet
              browsers accept Cookies but this can be changed. For further details, please consult the help menu in your
              internet browser.
            </p>
            <p className='mb-3'>
              6. You can choose to delete Cookies at any time; however you may lose any information that enables you to
              access the Website more quickly and efficiently including, but not limited to, personalisation settings.
            </p>
            <p className='mb-3'>
              7. It is recommended that you ensure that your internet browser is up-to-date and that you consult the
              help and guidance provided by the developer of your internet browser if you are unsure about adjusting
              your privacy settings.
            </p>
            <p className='mb-3'>
              8. For more information generally on cookies, including how to disable them, please refer to
              aboutcookies.org. You will also find details on how to delete cookies from your computer.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                General
              </h2>
            </div>
            <p className='mb-3'>
              1. You may not transfer any of your rights under this privacy notice to any other person. We may transfer
              our rights under this privacy notice where we reasonably believe your rights will not be affected.
            </p>
            <p className='mb-3'>
              2. If any court or competent authority finds that any provision of this privacy notice (or part of any
              provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent
              required, be deemed to be deleted, and the validity and enforceability of the other provisions of this
              privacy notice will not be affected.
            </p>
            <p className='mb-3'>
              3. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be
              deemed a waiver of that, or any other, right or remedy.
            </p>
            <p className='mb-3'>
              4. This Agreement will be governed by and interpreted according to the law of England and Wales. All
              disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and
              Welsh courts.
            </p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Changes to this privacy notice
              </h2>
            </div>
            <p className='mb-3'>
              1. C Workshop Ltd reserves the right to change this privacy notice as we may deem necessary from time to
              time or as may be required by law. Any changes will be immediately posted on the Website and you are
              deemed to have accepted the terms of the privacy notice on your first use of the Website following the
              alterations.
            </p>
            <p className='mb-3 pl-5'>You may contact C Workshop Ltd by email at privacy @ Xcuts co uk.</p>
            <p className='mb-3 text-primary pl-5'>25 May 2018</p>
          </div>
          <div>
            <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
              <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
                Cookies
              </h2>
            </div>
            <p className='mb-3'>
              Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but
              if you think we have missed a cookie or there is any discrepancy, please let us know.
            </p>
          </div>
          <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
            <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
              Strictly necessary
            </h2>
          </div>
          <div className='relative my-3'>
            <p className='text-[#6d6d6d] mb-4'>We use the following strictly necessary cookies:</p>
            <table className='table-auto mb-9'>
              <tbody>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Description of Cookie
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>Purpose</td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-b border-[#e7e7e7]'>
                    Session cookie
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-b border-[#e7e7e7]'>
                    We use this session cookie to remember you and maintain your session whilst you are using our
                    website
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='relative py-5 px-5 inline-block before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[76px] before:border-b-[76px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 my-8'>
            <h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg pr-20 font-semibold text-white'>
              Analytical/performance
            </h2>
          </div>
          <div className='relative my-3'>
            <p className='text-[#6d6d6d] mb-4'>We use the following analytical/performance cookies:</p>
            <table className='table-auto mb-9'>
              <tbody>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-[#e7e7e7]'>
                    Description of Cookie
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-[#e7e7e7]'>Purpose</td>
                </tr>
                <tr>
                  <th className='align-top p-4 pl-0 text-lg text-black text-left w-[30%] border-r border-t border-b border-[#e7e7e7]'>
                    Google Analytics cookie
                  </th>
                  <td className='p-4 text-[#6d6d6d] border-t border-b border-[#e7e7e7]'>
                    We use Google Analytics cookie to help us analyse how users use the website
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
