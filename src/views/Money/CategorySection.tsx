import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      /*todo 在某个元素下面加入横线，不改变高度和文字高度， 改天记到博客里面 */
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
export {CategorySection}