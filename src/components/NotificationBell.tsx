import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import type { Notification } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface NotificationBellProps {
  notifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
}

export function NotificationBell({ notifications, onNotificationClick }: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="font-semibold mb-4">Notificaciones</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <p className="text-gray-500 text-center">No hay notificaciones</p>
              ) : (
                notifications.map((notification) => (
                  <button
                    key={notification.id}
                    onClick={() => {
                      onNotificationClick(notification);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg hover:bg-gray-50 ${
                      !notification.isRead ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="font-semibold">{notification.title}</div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {notification.message}
                    </p>
                    <div className="text-xs text-gray-500 mt-1">
                      {format(new Date(notification.date), "d 'de' MMMM, HH:mm", { locale: es })}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}