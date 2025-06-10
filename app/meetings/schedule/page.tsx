'use client';

import React from 'react';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function ScheduleMeetingPage() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Schedule a Meeting</h1>
            <p className="text-gray-600 mt-1">
              Set up a meeting with your business matches
            </p>
          </div>
          <Link 
            href="/meetings"
            className="mt-4 sm:mt-0 px-4 py-2 border border-[#1A4A4C] text-[#1A4A4C] rounded-md hover:bg-[#1A4A4C]/5 transition-colors"
          >
            Back to Meetings
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <select
                  id="company"
                  name="company"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                  defaultValue=""
                >
                  <option value="" disabled>Select a company</option>
                  <option value="EcoShop">EcoShop</option>
                  <option value="GreenRetail">GreenRetail</option>
                  <option value="Sustainable Solutions">Sustainable Solutions</option>
                  <option value="EcoTech Innovations">EcoTech Innovations</option>
                  <option value="Natural Goods Co.">Natural Goods Co.</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Name of the person you'll be meeting with"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="meeting-type" className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Type *
              </label>
              <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative bg-white border rounded-lg border-gray-300 p-4 flex cursor-pointer focus:outline-none hover:border-[#1A4A4C]">
                  <input
                    type="radio"
                    name="meeting-type"
                    id="meeting-type-video"
                    value="video"
                    className="h-4 w-4 text-[#1A4A4C] border-gray-300 focus:ring-[#1A4A4C]"
                    defaultChecked
                  />
                  <label htmlFor="meeting-type-video" className="ml-3 flex flex-col cursor-pointer">
                    <span className="block text-sm font-medium text-gray-900">Video Call</span>
                    <span className="block text-sm text-gray-500">Meet virtually via video conference</span>
                  </label>
                </div>
                <div className="relative bg-white border rounded-lg border-gray-300 p-4 flex cursor-pointer focus:outline-none hover:border-[#1A4A4C]">
                  <input
                    type="radio"
                    name="meeting-type"
                    id="meeting-type-phone"
                    value="phone"
                    className="h-4 w-4 text-[#1A4A4C] border-gray-300 focus:ring-[#1A4A4C]"
                  />
                  <label htmlFor="meeting-type-phone" className="ml-3 flex flex-col cursor-pointer">
                    <span className="block text-sm font-medium text-gray-900">Phone Call</span>
                    <span className="block text-sm text-gray-500">Connect via telephone</span>
                  </label>
                </div>
                <div className="relative bg-white border rounded-lg border-gray-300 p-4 flex cursor-pointer focus:outline-none hover:border-[#1A4A4C]">
                  <input
                    type="radio"
                    name="meeting-type"
                    id="meeting-type-inperson"
                    value="inperson"
                    className="h-4 w-4 text-[#1A4A4C] border-gray-300 focus:ring-[#1A4A4C]"
                  />
                  <label htmlFor="meeting-type-inperson" className="ml-3 flex flex-col cursor-pointer">
                    <span className="block text-sm font-medium text-gray-900">In Person</span>
                    <span className="block text-sm text-gray-500">Meet face to face</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration *
                </label>
                <select
                  id="duration"
                  name="duration"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                  defaultValue="60"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone *
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                  defaultValue="America/Los_Angeles"
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                  <option value="Europe/Paris">Central European Time (CET)</option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                  <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location / Meeting Link
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Video call link or physical address"
              />
              <p className="mt-1 text-sm text-gray-500">
                For video calls, a link will be automatically generated if left blank
              </p>
            </div>

            <div>
              <label htmlFor="agenda" className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Agenda
              </label>
              <textarea
                id="agenda"
                name="agenda"
                rows={4}
                className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Describe the purpose and goals of this meeting"
              ></textarea>
            </div>

            <div>
              <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Participants
              </label>
              <input
                type="text"
                name="participants"
                id="participants"
                className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter email addresses separated by commas"
              />
              <p className="mt-1 text-sm text-gray-500">
                Invite team members or colleagues to join this meeting
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <Link
                href="/meetings"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
              >
                Schedule Meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
