import * as React from 'react';
export default class BaseComponent extends React.Component
{
    /**
     * @author anni
     * 注入HTTP服务
     */
    public static Http: any;
    constructor ()
    {
        super(BaseComponent.Http);
    }
}