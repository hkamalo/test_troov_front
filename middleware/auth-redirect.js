export default async function ({ $auth, redirect, store, route }) {
    if (!$auth.loggedIn) {
      redirect(`/login?redirect=${route.path}`);
    }
  };