import React, { Component } from "react";
import "./style.css";

class StationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      searchTerm: "",
    };
  }

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const timelineData = [
      {
        category: 'education',
        title: 'Education',
        items: [
          {
            title: 'Master of Science in Information Systems with Computing',
            date: '2017/2019',
            location: 'Dublin Business School, Dublin, Ireland'
          },
          {
            title: 'Bachelor of Electrical Engineering',
            date: '2011/2016',
            location: 'North Maharashtra University, Jalgaon, India'
          },
          {
            title: 'Boys Town Public School',
            date: '2009/2010',
            location: 'Dublin Business School, Dublin, Ireland'
          }
        ]
      },
      {
        category: 'experience',
        title: 'Experience',
        items: [
          {
            title: 'Software Developer',
            date: '2020/Present',
            location: 'Kare, Newbridge, Ireland'
          },
          {
            title: 'Junior Developer',
            date: '2019/2020',
            location: 'Unipupil Limited, Dublin, Ireland'
          },
          {
            title: 'Junior Developer',
            date: '2015/2017',
            location: 'Dublin Business School, Dublin, Ireland'
          }
        ]
      }
    ];

    return (
      <div className="timelines">
        <input
          type="text"
          placeholder="Search for a title..."
          value={searchTerm}
          onChange={this.handleSearch}
        />
        {timelineData.map((timeline, index) => (
          <div key={index} className={`timeline ${timeline.category}`}>
            <h2 className="timeline-title">{timeline.title}</h2>
            <div className="timeline-items">
              {timeline.items.map((item, itemIndex) => {
                const match = item.title.toLowerCase().includes(searchTerm.toLowerCase());
                return match && (
                  <div key={itemIndex} className="timeline-item animated fadeIn">
                    <h3>{item.title}</h3>
                    <time dateTime={item.date}>{item.date}</time>
                    <div className="location">{item.location}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default StationList;
