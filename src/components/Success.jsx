import React from 'react';

export const Success = ({ count, setSucces }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>All {count} invitations sent to users.</p>
      <button onClick={() => setSucces(false)} className="send-invite-btn">Back</button>
    </div>
  );
};
