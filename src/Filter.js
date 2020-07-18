import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      searchResults: [],
    };
  }

  data = this.props.data;
  tags = ["All", ...this.props.data.map((item) => item.category)];

  componentDidMount = () => {
    this.handleSearch("All");
  };

  handleSearch = (search) => {
    this.setState({ search: search });
    if (search === "All") {
      this.setState({ searchResults: this.props.data });
    } else {
      const results = this.props.data.filter(
        (item) => item.category.toLowerCase() === search.toLowerCase()
      );
      this.setState({ searchResults: results });
    }
  };

  render() {
    return (
      <div>
        <div className="mt-2 border-2 border-brand rounded-lg pl-2 py-1 flex items-center">
          <span className="font-medium">Tags:</span>
          <div className="flex items-center overflow-x-auto overflow-y-hidden">
            {this.tags.map((item) => (
              <span
                id={item}
                key={item}
                className={`${
                  this.state.search === item ? "bg-gradient" : ""
                } bg-sepia-300 ml-2 px-3 py-1 rounded-full text-sm font-medium leading-5 text-white cursor-pointer`}
                onClick={(e) => this.handleSearch(e.target.id)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {this.state.searchResults.map((item) => (
          <div key={item.slug} className="mt-5">
            <a className="group" href={`\\${item.slug}`}>
              <article>
                <h2 className="text-2xl font-main leading-relaxed tracking-wide">
                  <span className="hover:text-brand hover:underline">
                    {item.title}
                  </span>
                </h2>
                <p className="mt-1 font-main text-sepia-300">{item.desc}</p>
              </article>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Filter;
