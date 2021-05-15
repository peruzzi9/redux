import { put, takeLatest, fork, all } from 'redux-saga/effects';
import * as actionTypes from "../store/actionTypes"

// The Saga’s generator function
function* fetchNews() {
  try {
    // note yield should be out of then/catch scope
    // yield can be used directly inside the context of Generators
    const json = yield fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .catch(err => { return { isError: true, error: err.message } });

    console.log("NEWS_RECEIVED_STATE===", json)

    if (json.isError)
      yield put({ type: actionTypes.NEWS_ERROR, error: json.error, });
    else
      yield put({ type: actionTypes.NEWS_RECEIVED, news: json, });
  }
  catch (error) {
    yield put({ type: actionTypes.NEWS_ERROR, error: error.message });
  }

  // put : will dispatch action to store/reducer
}
function* actionWatcher() {
  // takeLatest is blocking the execution of the Saga until someone dispatches the action GET_NEWS
  // from user interface 
  // when GET_NEWS is dispatched from UI  ( when user press on get latest news button )
  // reducer will set loading to true and user will see loader on his screen
  // saga as middleware will catch GET_NEWS action and unblock execution
  // and call fetchNews

  // A middleware is a piece of code that is executed 
  // after an action is dispatched but before reaching the reducer.

  yield takeLatest(actionTypes.GET_NEWS, fetchNews)
  // takeLatest vs takeEvery :takeLatest Does not allow multi same time fetches of user. If "USER_FETCH_REQUESTED" gets
  // dispatched while a fetch is already pending, that pending fetch is cancelled
  // and only the latest one will be run.
}

// will always run and we can see it in browser inspect 
// no action needed 
function* helloSaga() {
  console.log('Hello News Sagas!')
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// all sagas started here at once
export default function* rootSaga() {
  yield all([
    fork(actionWatcher),
    fork(helloSaga)
  ]);
}

/* A redux saga could live in a single file containing:

a worker function (fetchNews)
a watcher function (actionWatcher)
The watcher is a generator function watching for every action we are interested in. 
In response to that action, the watcher will call a worker saga, 
which is another generator function for doing the actual API call. */