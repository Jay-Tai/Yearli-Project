import { useEffect, useState } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import QRCode from 'qrcode';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [qrURL, setQrURL] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });
    return () => unsub();
  }, []);

  const createProfile = async () => {
    const ref = await addDoc(collection(db, 'yearbook'), {
      owner: user.email,
      messages: []
    });
    const link = `${window.location.origin}/${ref.id}`;
    const qr = await QRCode.toDataURL(link);
    setQrURL(qr);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Hi {user?.displayName}</h2>
      <button
        onClick={createProfile}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Generate QR Profile
      </button>
      {qrURL && <img src={qrURL} alt="QR Code" className="mt-6 max-w-xs" />}
    </div>
  );
}
