import styled from 'styled-components'

import { fontSize } from '../../styles/mixins'
import { brandTextGrey } from '../../styles/variables'

const Paragraph = styled.p`
  ${fontSize('14px')};  
  color: ${brandTextGrey};
  line-height: 1.9em;
`

export default Paragraph
