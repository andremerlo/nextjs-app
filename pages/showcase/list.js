import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { makeRequest } from '../../util'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static async getInitialProps({ asPath, query }) {

        const { id } = query
        
        const products = id && await makeRequest(`showcase_lists/${id}/products/`).then(
            res => res.objects,
            err => {        
                console.error(err)
                error = true
                return null
        })

        return {
            id,
            products
        }
    }

    render () {
        return (
            <Layout>
                <div>Lista de produtos: {this.props.id}</div>
                <ul>
                    { this.props.products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </Layout>
        )
    }

}