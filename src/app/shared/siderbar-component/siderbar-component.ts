import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-siderbar-component',
  imports: [Menu],
  templateUrl: './siderbar-component.html',
  styleUrl: './siderbar-component.scss',
})
export class SiderbarComponent implements OnInit {
  protected items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: '/inicio',
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Pacientes',
            icon: 'pi pi-users'
          },
          {
            label: 'Profissionais',
            icon: 'pi pi-user-plus'
          },
          {
            label: 'Responsaveis',
            icon: 'pi pi-id-card'
          },
          {
            label: 'Relatorios',
            icon: 'pi pi-file-import'
          }
        ]
      },
      {
        label: 'Perfil',
        items: [
          {
            label: 'Configurações',
            icon: 'pi pi-cog'
          },
          {
            label: 'Sair',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
  }
}
