const DAY_MAP = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const toStr = num => (num + '').padStart(2, 0)

class Clock {
  constructor(ele) {
    this.ele = ele
    this.intervalId = null
    this.render()
  }

  render() {
    const now = new Date()
    const hour = now.getHours()
    const mins = now.getMinutes()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    const dayofweek = now.getDay()
    this.ele.innerHTML = `
      <div class="time">
        ${toStr(hour)}:${toStr(mins)}
      </div>
      <div class="date">
        ${year}/${toStr(month + 1)}/${toStr(day)} ${DAY_MAP[dayofweek]}
      </div>
    `
  }

  start() {
    setInterval(() => {
      this.render()
    }, 1000)
  }

  stop() {}

  destory() {
    clearInterval(this.intervalId)
  }
}

window.onload = function () {
  const ele = document.getElementById('clock')
  const clock = new Clock(ele)
  clock.start()
}
