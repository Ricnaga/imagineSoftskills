import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Main from '../pages/Main'
import WhatIs from '../pages/WhatIs'
import Why from '../pages/Why'
import Images from '../pages/Images'
import References from '../pages/References'

const Routes: React.FC = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/Whatis' component={WhatIs}/>
        <Route path='/why' component={Why}/>
        <Route path='/images' component={Images}/>
        <Route path='/references' component={References}/>
    </Switch>
)

export default Routes;