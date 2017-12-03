// // @flow

// import * as React from 'react';
// import Spinner from './Spinner';

// class AsyncRoute extends React.Component<{}, {}> {
//   state = {
//     loaded: false
//   };
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     this.props.loadingPromise.then(module => {
//       this.component = module.default;
//       this.setState({ loaded: true });
//     });
//   }
//   props: {
//     props: any,
//     loadingPromise: Promise<any>
//   };
//   component = null;
//   render() {
//     if (this.state.loaded) {
//       return <this.component {...this.props.props} />;
//     }
//     return <Spinner />;
//   }
// }

// export default AsyncRoute;
