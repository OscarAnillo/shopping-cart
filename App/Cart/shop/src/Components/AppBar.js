import {AppBar, Toolbar, Tabs, Tab, Badge} from '@material-ui/core';


export default function AppBarComponent(props){
    const {position, label, className} = props;
    return(
        <AppBar position={position}>
                    <Toolbar className={className}>
                        <Tabs>
                            <Tab label={label} value={0}/>
                            <Tab label={label} value={1}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
    )
}