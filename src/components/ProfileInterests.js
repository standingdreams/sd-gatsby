import React from 'react'

export default function ProfileInterests({heading, items}) {
  return (
    <div className="profile__grid-item">
      <h3 className="el-h4">{heading}</h3>
      <ul className="profile-item__list">
        {items.map((item, index) => (
          <li key={`interest-${index}`}>{item.interest}</li>
        ))}
      </ul>
    </div>
  )
}