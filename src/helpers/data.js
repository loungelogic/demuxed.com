export const extractNodes = dataArray =>
  dataArray.edges.map(edge => edge.node)
