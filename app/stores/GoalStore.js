import { observable, autorun } from 'mobx';

class GoalsStore {
  @observable post_count = 0
  @observable current_page = ''
  @observable current_puid = ''
}

const goalsStore = new GoalsStore()

/*
autorun(() => {
  console.log(appStore)
})
*/

export default goalsStore
