import { Component, inject, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-siderbar-component',
  imports: [Menu],
  templateUrl: './siderbar-component.html',
  styleUrl: './siderbar-component.scss',
})
export class SiderbarComponent implements OnInit {

  private readonly breackPointerObserver = inject(BreakpointObserver)

  protected items: MenuItem[] | undefined;
  siderbarClosed = signal<boolean>(false);

  ngOnInit() {
    this.breackPointerObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.siderbarClosed.set(!result.matches);
    })

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
            icon: 'pi pi-users',
            routerLink: '/pacientes'
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

  toggleMenu() {
    this.siderbarClosed.update(value => !value);
  }
}
