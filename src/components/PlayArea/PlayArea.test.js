import react from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PlayArea from './index';
import { shallow } from 'enzyme';

describe('PlayAreaComponent', () => {
    
    test('should match snapshot', () => {
        const tree = renderer.create(<PlayArea />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should contain list component', () => {
        const tree = shallow(<PlayArea />);
        expect(tree.find("List")).toHaveLength(1);        
    });   
});
