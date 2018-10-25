import React from 'react'
import Base from 'terra-base'
import { I18nProvider, i18nLoader } from 'terra-i18n';
import ActionHeader from 'terra-action-header/lib/ActionHeader'
import Button from 'terra-button/lib/Button'
import Textarea from 'terra-form-textarea'
import Layout from "./Layout.jsx"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areTranslationsLoaded: false,
            locale: props.locale,
            messages: {},
        };
    }

    componentWillMount() {
        // make sure the asynchronous setState rerun after initial rendering
        i18nLoader(this.state.locale, this.setState, this);
    }

    render() {
        // Do not render components or the provider until translations and locale
        // data are loaded.
        if (!this.state.areTranslationsLoaded) {
            return null;
        }

        return (
            <I18nProvider locale={this.state.locale} messages={this.state.messages}>
                <Base>
                    <Layout />
                </Base>
            </I18nProvider>
        );
    }
}
const buttonStyle = {margin: '5px'};

const ButtonVariant = () => (
    <div>
        <br/>
        <h3>Enter the SQL Query Below:</h3>
        <br/>
        <Textarea name="query" style={{height: 200, width: 600}} />
        <br/>
        <Button text="RUN" variant="emphasis" name="runquery" onClick={() =>
            <h1>Query Executed</h1>
        } style={buttonStyle}/>
    </div>

);

export default Home;