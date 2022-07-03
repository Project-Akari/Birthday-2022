import { Component, OnInit } from '@angular/core';
import { GroupsKey, SekaiGroup, SekaiGroups } from './model/groups';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  groups: SekaiGroup[] = SekaiGroups.groups;
  selectedGroup: SekaiGroup;

  constructor() { }

  ngOnInit(): void {
    this.selectedGroup = SekaiGroups.getGroup(GroupsKey.virtualSinger);
  }

  logoOnClick(group: SekaiGroup): void {
    this.selectedGroup = group;
  }
}
