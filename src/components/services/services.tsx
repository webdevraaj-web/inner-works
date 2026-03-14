'use client'

import { useEffect, useState } from 'react'

import { fetchPageBySlug } from '@/lib/wordpress';
import ServiceCard from './card';
import Testimonials from './testimonials';
import Faqs from './faqs';

function Services({ slug }: { slug: string }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchService = async () => {
            const result = await fetchPageBySlug(slug);
            setData(result);
        };

        fetchService();
    }, []);



    // @ts-expect-error ignore this message
    const card = data?.acf?.services_card ?? []
    // @ts-expect-error ignore this message

    const faqs = data?.acf?.faqs ?? []
    // @ts-expect-error ignore this message

    const testimonials = data?.acf?.testimonials ?? []
    // @ts-expect-error ignore this message

    const description = data?.acf ?? {}
    // @ts-expect-error ignore this message

    const t_description = data?.acf ?? {}
    // @ts-expect-error ignore this message

    const f_description = data?.acf ?? {}






    return (
        <>

            <div className="services_outer">
                <div className="inner_section">
                    <div className="section_wrapper">

                        <h4 className='top_heading'>services</h4>
                        <h3 className='section_m_heading'>Our Services</h3>


                        <div
                            className="serv_desc"
                            dangerouslySetInnerHTML={{
                                __html: description?.about_service
                            }}
                        />

                        <div className="service_card">
                            <ServiceCard card={card} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services_outer s_testi_outer">
                <div className="inner_section">
                    <div className="section_wrapper">
                        <h4 className='top_heading'>What they Say </h4>
                        <h3 className='section_m_heading'>Testimonials</h3>
                        <p
                            className="serv_desc"
                            dangerouslySetInnerHTML={{
                                __html: t_description?.testimonials_description
                            }}
                        ></p>

                        <div className="service_testimonials">
                            <Testimonials testimonials={testimonials} />
                        </div>


                    </div>
                </div>
            </div>
            <div className="services_outer">
                <div className="inner_section">
                    <div className="section_wrapper">
                        <h4 className='top_heading'>Faqs</h4>
                        <h3 className='section_m_heading'>Faqs</h3>
                        <p
                            className="serv_desc"
                            dangerouslySetInnerHTML={{
                                __html: f_description?.faqs_description
                            }}
                        ></p>
                        <div className="service_testimonials">
                            <div className="services_faqs">
                                <Faqs faqs={faqs} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Services