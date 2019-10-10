import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function about() {
    return (
        <Layout>
            <SEO title="Page two" />
            <div>
                <h1>About</h1>
                <p>Just a website to describe my experiences in Europe. This Website is developed using Gatsby.</p>
            </div>
        </Layout>
    )
}
