/**
 * Created by   on 2016/8/26.
 */
import React from 'react'
let ReactDOM = require('react-dom')
import {Tabs, Tab} from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyTest  from './test'
import Slider from 'material-ui/Slider'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme() }>
                <div>
                    <AppBar title="Material-UI" showMenuIconButton={false}/>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tab A" value="a" >
                    <div>
                        <h2 style={styles.headline}>Controllable Tab A</h2>

                          <MyTest  />
                        <p>
                            AAAAAAAAACC
                        </p>
                    </div>
                </Tab>
                <Tab label="Tab B" value="b">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <Hello />
                        <p>
                            BBBBBB
                        </p>
                    </div>
                </Tab>
            </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}

let Hello1 = React.createClass({
    render(){
        return(
            <div>
                <h1>Hello,boy!</h1>

            </div>
        )
    }
})

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hellsssso,boyfffffff!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <TabsExampleControlled />,
    document.getElementById("app")
);
// 配置路由
// render((
//     <Router history={hashHistory} >
//         <Route path="/" component={hello}>
//             <IndexRoute path="/" component={hello} />
//         </Route>
//     </Router>
// ), document.getElementById('app'));
