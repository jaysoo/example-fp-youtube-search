export default {
  container: {
    boxSizing: 'border-box',
    fontFamily: 'Helvetica Neue',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  inputContainer: {
    alignSelf: 'flex-top',
    width: '100%',
    height: '50px'
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    fontSize: '28px',
    padding: '10px',
    outline: 'none',
    border: '0',
    boxShadow: 'inset 2px 2px 12px #ccc',
    color: '#999'
  },
  fill: {
    boxSizing: 'border-box',
    padding: '10px',
    fontSize: '28px',
    color: '#aaa',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    display: 'flex'
  },
  results: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  video: {
    boxSizing: 'border-box',
    margin: '0',
    width: '25%',
    minWidth: '100px'
  },
  thumbnail: {
    display: 'block',
    width: '100%'
  }
};
