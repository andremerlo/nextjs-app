import React, { Component } from 'react';
import Layout from '../../components/Layout'
import Head from 'next/head'
import { makeRequest, getStorenameFromPath } from '../../util'
import ShowcaseList from '../../components/showcase/ShowcaseList';

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    static async getInitialProps({asPath}) {

        let error = false
        const storeName = getStorenameFromPath(asPath)
        const showcase = storeName && await makeRequest(`showcases/${storeName}/`).then(
            res => res,
            err => {        
                console.error(err)
                error = true
                return null
        })

        return {
            showcase: showcase,
            error: error
        }
    }

    render () {
        const title = this.props.showcase ? `Magazine ${this.props.showcase.name}` : 'MagazineVocê'
        return (
            <Layout>
                <Head>
                    <title>{ title }</title>
                </Head>            
                { this.props.error ? (
                    <p style={{color: 'red'}}>Ops! Essa loja não existe.</p> 
                ) : (
                    <div>
                        <strong>Divulgador:</strong> { this.props.showcase.owner }
                        <ShowcaseList lists={this.props.showcase.lists} />
                    </div>    
                )}
            </Layout>
        )         
        
    }
}