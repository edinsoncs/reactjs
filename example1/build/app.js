var Profiles = React.createClass({
	displayName: "Profiles",

	getInitialState: function () {
		return {
			like: false
		};
	},
	likeadoPro: function () {
		this.setState({
			like: !this.state.like
		});
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "profiles" },
			React.createElement(
				"figure",
				null,
				React.createElement(
					"h1",
					null,
					this.props.code
				)
			),
			React.createElement(
				"header",
				null,
				React.createElement(
					"h2",
					null,
					"Hello mi name ",
					this.props.name
				),
				React.createElement(
					"p",
					null,
					"I am from ",
					this.props.form,
					" "
				),
				React.createElement(
					"i",
					null,
					"Contact us: ",
					this.props.mail
				),
				React.createElement(
					"label",
					{ "for": "check" },
					"Like: ",
					React.createElement(
						"b",
						null,
						String(this.state.like)
					)
				),
				React.createElement("input", { onChange: this.likeadoPro, type: "checkbox", id: "check" })
			)
		);
	}

});

ReactDOM.render(React.createElement(
	"article",
	{ className: "the__Content" },
	React.createElement(Profiles, { name: "edinson", code: "Js", mail: "edinsonlabs@hotmail.com", form: "peru" }),
	React.createElement(Profiles, { name: "zuck", code: "Php", mail: "zuck@facebook.com", form: "EE.UU" }),
	React.createElement(Profiles, { name: "jobs", code: "Not Code", mail: "jobs@apple.com", form: "EE.UU" }),
	React.createElement(Profiles, { name: "bill", code: "VB", mail: "bill@vista.com", form: "EE.UU" })
), document.getElementById("showProfiles"));