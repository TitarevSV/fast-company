import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const nahdleDelete = (userId) => {
    setUsers((users) => users.filter((users) => users._id !== userId));
  };

  const renderPhrace = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек тусанут";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
    if (lastOne === 1) return "Человек тусанет";
    return "Человек тусанет";
  };

  return (
    <>
      <span
        className={"badge fs-2 bg-" + (users.length > 0 ? "primary" : "danger")}
      >
        {users.length > 0
          ? `${users.length} ${renderPhrace(users.length)} с тобой`
          : "Никто не тусанет с тобой"}
      </span>
      {users.length !== 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретилтсь, раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      key={item._id}
                      className={`badge bg-${item.color} m-1`}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => nahdleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
