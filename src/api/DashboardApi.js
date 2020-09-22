export default async (configSetting, state) => {
  state.dashBoardConfigSettings = configSetting;
  // eslint-disable-next-line
    new Promise(() => {
    setTimeout(() => {
      if (configSetting.foo) {
        state.nodeData = [1, 2, 3];
      } else {
        state.nodeData = [4, 5, 6];
      }
    }, 3000);
  });
};
