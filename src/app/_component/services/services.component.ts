import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
services = [
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Location Tracking',
      description: 'Track your on-field team in real-time with our advanced GPS-enabled tracking system.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Analytics',
      description: 'Monitor KPIs, performance trends, and generate insightful analytics dashboards.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Task Management',
      description: 'Assign, monitor, and close tasks with smart notifications and progress tracking.'
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      title: 'Cloud Integration',
      description: 'Secure cloud-based storage for data, reports, and project documentation.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'User Access Control',
      description: 'Easily manage permissions, roles, and data access with multi-level user control.'
    },
    {
      icon: 'fas fa-bell',
      title: 'Smart Notifications',
      description: 'Stay informed with automated email, SMS, and push alerts based on live activity.'
    },
     {
      icon: 'fas fa-bell',
      title: 'Smart Notifications',
      description: 'Stay informed with automated email, SMS, and push alerts based on live activity.'
    },
     {
      icon: 'fas fa-bell',
      title: 'Smart Notifications',
      description: 'Stay informed with automated email, SMS, and push alerts based on live activity.'
    },
     {
      icon: 'fas fa-bell',
      title: 'Smart Notifications',
      description: 'Stay informed with automated email, SMS, and push alerts based on live activity.'
    },
     {
      icon: 'fas fa-bell',
      title: 'Smart Notifications',
      description: 'Stay informed with automated email, SMS, and push alerts based on live activity.'
    }
  ];
}
