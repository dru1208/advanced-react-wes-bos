import App, { Container } from 'next/app';
// this is a custom App that as the highest parent component
import Page from '../components/Page.js'

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp