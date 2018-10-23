import React from 'react'
import Base from 'terra-base'
import {IntlProvider, InjectIntl, FormattedMessage} from 'react-intl'
import ActionHeader from 'terra-action-header/lib/ActionHeader'
import Button from 'terra-button/lib/Button'
import Textarea from 'terra-form-textarea'

class Home extends React.Component {
    constructor(props) {
        super(props);

        // define initial state
        const locale = props.locale || defaultLocale;
        this.state = {
            areTranslationsLoaded: false,
            locale,
            messages: translations[locale],
        };

        // bind custom methods to have same "this" as the react built-in methods, the current instance of this component
        Object.getOwnPropertyNames(BareFooter.prototype).forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    componentWillMount() {
        // make sure the asynchronous setState rerun after initial rendering
        i18nLoader(this.props.locale, this.setState, this);
    }

    render() {
        return (
            <div>
            <IntlProvider locale={this.props.locale} messages={this.state.messages} >
                <Base>
                    <br />
                    <ActionHeader title="SQL Query Tool"/>
                    <br />
                    <Home/>
                    <ButtonVariant/>
                </Base>
            </IntlProvider>
            </div>
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
        <Button text="RUN" variant="emphasis" name="runquery" onclick={() =>
            <h1>Query Executed</h1>
        } style={buttonStyle}/>
    </div>

);

export default Home;