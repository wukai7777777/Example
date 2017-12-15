const natives = {
	accessToken: 'LmRlaxBbMj/BaaMW6kNiQM0SBrhZ/lJPAUwjhppDYhWNkradyU4XOvEZk2aaczK0zFfT7Zi6'
}



// 注入到全局
const hookTo = global.__proto__ || global
hookTo.natives = natives

export default natives