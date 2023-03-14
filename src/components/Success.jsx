import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Вдало!</h3>
      {count === 1 ?  <p>{count} користувачу відправлено запрошення</p> : <p>Всім {count} користувачам відправлено запрошення.</p>}
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
