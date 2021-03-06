import React from "../../../node_modules/react/react";
import MixinTabs from "./MixinTabs";

// Ancestors - List > Docs

var MixinGroup = React.createClass({

	render() {

		var group  = this.props.ord;
		var inc    = this.props.includes;
		var mixins = inc[group].mixins;
		var title  = inc[group].title;

		return (
			<div className="include-block" id={group}>
				<h1>{{title}}</h1>
				<hr />
				{mixins.map(function(mixin){
					return (
						<div className="mixin" id={mixin.name}>
							<h2 className="red"><span className="leckerli-one">@include</span> {mixin.name};</h2>
							<div dangerouslySetInnerHTML={{__html: mixin.desc}} />
							{mixin.args > -1 &&
								<div>

									<h6>Arguments</h6>
									<p>This mixin takes <span>{mixin.args}</span> argument{mixin.args > 1 && "s"}.</p>
									<div dangerouslySetInnerHTML={{__html: mixin.params}} />

								</div>
							}
							<h6>Usage</h6>
							<MixinTabs data={mixin} />
							{mixin.demo &&
								<div>
									<h6>Example</h6>
									<div dangerouslySetInnerHTML={{__html: mixin.demo}} />
								</div>
							}
							{mixin.markup &&
								<div className="code html-code">
									<header>
										<ul>
											<li className="active">
												<a>Example HTML</a>
											</li>
										</ul>
									</header>
									<div className="code-body scrollbar html" dangerouslySetInnerHTML={{__html: mixin.markup}} />
								</div>
							}
							<hr />
						</div>
					)
				})}
			</div>
		)
	}
});

export default MixinGroup;