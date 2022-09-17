import logo from '../../images/migros-logo.svg';
import { Information16 as Information } from "@carbon/icons-react";
import {Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, Search} from "@carbon/react";

function AppHeader() {
    return (
        <div style={{marginBottom: '3rem'}}>
        <Header  aria-label={'header'}>
            <HeaderName href="#" prefix="BETTER CHAIN">
                for
                <img alt={'logo'} src={logo} height={16} style={{marginLeft: '.3rem'}} />
            </HeaderName>
            <Search light={true}
                    labelText={""}
                    id={'track-order'}
                    placeholder={'Track order...'}
                    size={'lg'}
                    onChange={(e) => {
                        console.log('changed');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            console.log('do search');
                        }
                    }}
                    onClear={() => {
                        console.log('cleared');
                    }}

            />
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="About" onClick={() => {}}>
                    <Information style={{fill: '#fff'}}/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
        </div>
    );

}

export default AppHeader;