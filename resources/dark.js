// Based on Jared Meadows UserScript from https://userstyles.org/styles/172874
// Raw JS at https://userstyles.org/styles/userjs/172874/google-voice-dark-theme.user.js
(function() {
  var css = `
html {
  background-color: rgb(255, 255, 255);
  color: white;
}

md-autocomplete.md-default-theme input,
md-autocomplete input {
  color: rgba(255, 255, 255, 0.87);
}

.md-autocomplete-suggestions-container.md-default-theme li,
.md-autocomplete-suggestions-container li {
  color: rgba(255, 255, 255, 0.87);
}

md-bottom-sheet.md-default-theme.md-list md-list-item,
md-bottom-sheet.md-list md-list-item {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-primary,
.md-button.md-primary {
  color: rgb(255, 134, 148);
}

.md-button.md-default-theme.md-primary.md-fab,
.md-button.md-primary.md-fab,
.md-button.md-default-theme.md-primary.md-raised,
.md-button.md-primary.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(0, 121, 107);
}

.md-button.md-default-theme.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-primary.md-raised:not([disabled]) md-icon,
.md-button.md-primary.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-primary.md-fab:not([disabled]):hover,
.md-button.md-primary.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-primary.md-raised:not([disabled]):hover,
.md-button.md-primary.md-raised:not([disabled]):hover {
  background-color: rgb(0, 137, 123);
}

.md-button.md-default-theme.md-primary:not([disabled]) md-icon,
.md-button.md-primary:not([disabled]) md-icon {
  color: rgb(255, 134, 148);
}

._md a.md-default-theme:not(.md-button).md-primary,
._md a:not(.md-button).md-primary {
  color: rgb(255, 134, 148);
}

._md a.md-default-theme:not(.md-button).md-primary:hover,
._md a:not(.md-button).md-primary:hover {
  color: rgb(255, 134, 148);
}

md-card.md-default-theme md-card-header md-card-header-text .md-subhead,
md-card md-card-header md-card-header-text .md-subhead,
md-card.md-default-theme md-card-title md-card-title-text:not(:only-child) .md-subhead,
md-card md-card-title md-card-title-text:not(:only-child) .md-subhead {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme .md-ink-ripple,
md-checkbox .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme:not(.md-checked) .md-icon,
md-checkbox:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme:not([disabled]).md-primary .md-ripple,
md-checkbox:not([disabled]).md-primary .md-ripple {
  color: rgb(255, 118, 132);
}

md-checkbox.md-default-theme:not([disabled]).md-primary.md-checked .md-ripple,
md-checkbox:not([disabled]).md-primary.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme:not([disabled]).md-primary .md-ink-ripple,
md-checkbox:not([disabled]).md-primary .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-checkbox:not([disabled]).md-primary.md-checked .md-ink-ripple {
  color: rgba(255, 134, 148, 0.87);
}

md-checkbox.md-default-theme:not([disabled]).md-primary:not(.md-checked) .md-icon,
md-checkbox:not([disabled]).md-primary:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme:not([disabled]).md-primary.md-checked .md-icon,
md-checkbox:not([disabled]).md-primary.md-checked .md-icon {
  background-color: rgba(0, 121, 107, 0.87);
}

md-checkbox.md-default-theme:not([disabled]).md-primary.md-checked.md-focused .md-container::before,
md-checkbox:not([disabled]).md-primary.md-checked.md-focused .md-container::before {
  background-color: rgba(0, 121, 107, 0.26);
}

md-checkbox.md-default-theme:not([disabled]).md-primary.md-checked .md-icon::after,
md-checkbox:not([disabled]).md-primary.md-checked .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

md-checkbox.md-default-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container,
md-checkbox:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

md-checkbox.md-default-theme[disabled]:not(.md-checked) .md-icon,
md-checkbox[disabled]:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme[disabled] .md-icon::after,
md-checkbox[disabled] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme[disabled] .md-label,
md-checkbox[disabled] .md-label {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme .md-chips,
md-chips .md-chips {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px;
}

md-chips.md-default-theme .md-chips.md-focused,
md-chips .md-chips.md-focused {
  box-shadow: rgb(0, 121, 107) 0px 2px;
}

md-chips.md-default-theme .md-chips .md-chip-input-container input,
md-chips .md-chips .md-chip-input-container input {
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder,
md-chips .md-chips .md-chip-input-container input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme md-chip.md-focused,
md-chips md-chip.md-focused {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme md-chip.md-focused md-icon,
md-chips md-chip.md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator,
.md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {
  border-color: rgb(0, 150, 136);
}

.md-default-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled,
.md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {
  color: rgba(255, 105, 119, 0.6);
}

.md-default-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-default-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {
  background-image: initial;
  background-color: rgb(0, 150, 136);
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

.md-default-theme .md-calendar-date-disabled,
.md-calendar-date-disabled,
.md-default-theme .md-calendar-month-label-disabled,
.md-calendar-month-label-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme .md-datepicker-input,
.md-datepicker-input {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme .md-datepicker-input::-webkit-input-placeholder,
.md-datepicker-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme .md-datepicker-input-container,
.md-datepicker-input-container {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.md-default-theme .md-datepicker-input-container.md-datepicker-focused,
.md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(0, 121, 107);
}

.md-default-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle,
.md-datepicker-triangle-button .md-datepicker-expand-triangle {
  border-top-color: rgba(0, 0, 0, 0.54);
}

.md-default-theme .md-datepicker-open .md-datepicker-calendar-icon,
.md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(255, 134, 148);
}

md-dialog.md-default-theme.md-content-overflow .md-actions,
md-dialog.md-content-overflow .md-actions,
md-dialog.md-default-theme.md-content-overflow md-dialog-actions,
md-dialog.md-content-overflow md-dialog-actions,
md-divider.md-default-theme,
md-divider {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.layout-gt-lg-row>md-divider.md-default-theme,
.layout-gt-lg-row>md-divider,
.layout-gt-md-row>md-divider.md-default-theme,
.layout-gt-md-row>md-divider,
.layout-gt-sm-row>md-divider.md-default-theme,
.layout-gt-sm-row>md-divider,
.layout-gt-xs-row>md-divider.md-default-theme,
.layout-gt-xs-row>md-divider,
.layout-lg-row>md-divider.md-default-theme,
.layout-lg-row>md-divider,
.layout-md-row>md-divider.md-default-theme,
.layout-md-row>md-divider,
.layout-row>md-divider.md-default-theme,
.layout-row>md-divider,
.layout-sm-row>md-divider.md-default-theme,
.layout-sm-row>md-divider,
.layout-xl-row>md-divider.md-default-theme,
.layout-xl-row>md-divider,
.layout-xs-row>md-divider.md-default-theme,
.layout-xs-row>md-divider {
  border-right-color: rgba(0, 0, 0, 0.12);
}

md-icon.md-default-theme,
md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-icon.md-default-theme.md-primary,
md-icon.md-primary {
  color: rgb(255, 134, 148);
}

md-input-container.md-default-theme .md-input,
md-input-container .md-input {
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0.12);
}

md-input-container.md-default-theme .md-input::-webkit-input-placeholder,
md-input-container .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme>md-icon,
md-input-container>md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme .md-placeholder,
md-input-container .md-placeholder,
md-input-container.md-default-theme label,
md-input-container label {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required::after,
md-input-container:not(.md-input-focused):not(.md-input-invalid) label.md-required::after {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme .md-input-message-animation .md-char-counter,
md-input-container .md-input-message-animation .md-char-counter,
md-input-container.md-default-theme .md-input-messages-animation .md-char-counter,
md-input-container .md-input-messages-animation .md-char-counter {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-input-focused .md-input::-webkit-input-placeholder,
md-input-container.md-input-focused .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-has-value label,
md-input-container:not(.md-input-invalid).md-input-has-value label {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused .md-input,
md-input-container:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-default-theme:not(.md-input-invalid).md-input-resized .md-input,
md-input-container:not(.md-input-invalid).md-input-resized .md-input {
  border-color: rgb(0, 121, 107);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused label,
md-input-container:not(.md-input-invalid).md-input-focused label,
md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused md-icon,
md-input-container:not(.md-input-invalid).md-input-focused md-icon {
  color: rgb(255, 134, 148);
}

md-list.md-default-theme md-list-item.md-2-line .md-list-item-text h3,
md-list md-list-item.md-2-line .md-list-item-text h3,
md-list.md-default-theme md-list-item.md-2-line .md-list-item-text h4,
md-list md-list-item.md-2-line .md-list-item-text h4,
md-list.md-default-theme md-list-item.md-3-line .md-list-item-text h3,
md-list md-list-item.md-3-line .md-list-item-text h3,
md-list.md-default-theme md-list-item.md-3-line .md-list-item-text h4,
md-list md-list-item.md-3-line .md-list-item-text h4 {
  color: rgba(255, 255, 255, 0.87);
}

md-list.md-default-theme md-list-item.md-2-line .md-list-item-text p,
md-list md-list-item.md-2-line .md-list-item-text p,
md-list.md-default-theme md-list-item.md-3-line .md-list-item-text p,
md-list md-list-item.md-3-line .md-list-item-text p {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme md-list-item>md-icon,
md-list md-list-item>md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme md-list-item>md-icon.md-highlight,
md-list md-list-item>md-icon.md-highlight {
  color: rgb(255, 134, 148);
}

md-menu-content.md-default-theme md-menu-item,
md-menu-content md-menu-item {
  color: rgba(255, 255, 255, 0.87);
}

md-menu-content.md-default-theme md-menu-item md-icon,
md-menu-content md-menu-item md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme md-menu-item .md-button[disabled],
md-menu-content md-menu-item .md-button[disabled],
md-menu-content.md-default-theme md-menu-item .md-button[disabled] md-icon,
md-menu-content md-menu-item .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-menu-bar.md-default-theme>button.md-button,
md-menu-bar>button.md-button {
  color: rgba(255, 255, 255, 0.54);
}

md-toolbar.md-default-theme.md-menu-toolbar md-toolbar-filler,
md-toolbar.md-menu-toolbar md-toolbar-filler {
  background-color: rgb(0, 121, 107);
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme .md-button._md-nav-button.md-unselected,
md-nav-bar .md-button._md-nav-button.md-unselected {
  color: rgba(255, 255, 255, 0.54);
}

md-nav-bar.md-default-theme.md-primary>.md-nav-bar,
md-nav-bar.md-primary>.md-nav-bar {
  background-color: rgb(0, 121, 107);
}

md-nav-bar.md-default-theme.md-primary>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-primary>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-nav-bar.md-default-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar>md-nav-bar.md-default-theme>.md-nav-bar,
md-toolbar>md-nav-bar>.md-nav-bar {
  background-color: rgb(0, 121, 107);
}

md-toolbar>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button,
md-toolbar>md-nav-bar>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-toolbar>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-progress-linear.md-default-theme .md-container,
md-progress-linear .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme .md-bar,
md-progress-linear .md-bar {
  background-color: rgb(0, 121, 107);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-primary .md-bar1,
md-progress-linear[md-mode="buffer"].md-primary .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-primary .md-dashed::before,
md-progress-linear[md-mode="buffer"].md-primary .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme .md-off,
md-radio-button .md-off {
  border-color: rgba(0, 0, 0, 0.54);
}

md-radio-button.md-default-theme:not([disabled]).md-primary .md-on,
md-radio-button:not([disabled]).md-primary .md-on,
md-radio-button.md-default-theme:not([disabled]) .md-primary .md-on,
md-radio-button:not([disabled]) .md-primary .md-on,
md-radio-group.md-default-theme:not([disabled]).md-primary .md-on,
md-radio-group:not([disabled]).md-primary .md-on,
md-radio-group.md-default-theme:not([disabled]) .md-primary .md-on,
md-radio-group:not([disabled]) .md-primary .md-on {
  background-color: rgba(0, 121, 107, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-primary.md-checked .md-off,
md-radio-button:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]).md-primary .md-checked .md-off,
md-radio-button:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]) .md-primary .md-checked .md-off,
md-radio-button:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]).md-primary.md-checked .md-off,
md-radio-group:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]).md-primary .md-checked .md-off,
md-radio-group:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group:not([disabled]) .md-primary .md-checked .md-off {
  border-color: rgba(0, 121, 107, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-button:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group:not([disabled]) .md-primary .md-checked .md-ink-ripple {
  color: rgba(255, 134, 148, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-button:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-default-theme:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group:not([disabled]) .md-primary .md-container .md-ripple {
  color: rgb(255, 118, 132);
}

md-radio-button.md-default-theme[disabled],
md-radio-button[disabled],
md-radio-group.md-default-theme[disabled],
md-radio-group[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

md-radio-button.md-default-theme[disabled] .md-container .md-off,
md-radio-button[disabled] .md-container .md-off,
md-radio-button.md-default-theme[disabled] .md-container .md-on,
md-radio-button[disabled] .md-container .md-on,
md-radio-group.md-default-theme[disabled] .md-container .md-off,
md-radio-group[disabled] .md-container .md-off,
md-radio-group.md-default-theme[disabled] .md-container .md-on,
md-radio-group[disabled] .md-container .md-on {
  border-color: rgba(0, 0, 0, 0.38);
}

md-radio-group.md-default-theme .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-default-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple,
md-radio-group.md-primary .md-checked:not([disabled]) .md-ink-ripple {
  color: rgba(255, 134, 148, 0.26);
}

md-radio-group.md-default-theme.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-default-theme.md-focused:not(:empty).md-primary .md-checked .md-container::before,
md-radio-group.md-focused:not(:empty).md-primary .md-checked .md-container::before {
  background-color: rgba(0, 121, 107, 0.26);
}

md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-default-theme .md-select-value span:first-child::after,
md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select .md-select-value span:first-child::after {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value.md-select-placeholder,
md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value.md-select-placeholder {
  color: rgb(255, 134, 148);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-no-underline .md-select-value,
md-input-container.md-input-invalid md-select.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme .md-select-value,
md-select .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

md-select.md-default-theme .md-select-value.md-select-placeholder,
md-select .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-no-underline .md-select-value,
md-select.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.ng-invalid.ng-touched.md-no-underline .md-select-value,
md-select.ng-invalid.ng-touched.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme:not([disabled]):focus .md-select-value,
md-select:not([disabled]):focus .md-select-value {
  border-bottom-color: rgb(0, 121, 107);
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme:not([disabled]):focus .md-select-value.md-select-placeholder,
md-select:not([disabled]):focus .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme:not([disabled]):focus.md-no-underline .md-select-value,
md-select:not([disabled]):focus.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme[disabled] .md-select-icon,
md-select[disabled] .md-select-icon,
md-select.md-default-theme[disabled] .md-select-value,
md-select[disabled] .md-select-value,
md-select.md-default-theme[disabled] .md-select-value.md-select-placeholder,
md-select[disabled] .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme .md-select-icon,
md-select .md-select-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme md-content md-optgroup,
md-select-menu md-content md-optgroup {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme md-content md-option,
md-select-menu md-content md-option {
  color: rgba(255, 255, 255, 0.87);
}

md-select-menu.md-default-theme md-content md-option[disabled] .md-text,
md-select-menu md-content md-option[disabled] .md-text {
  color: rgba(255, 255, 255, 0.38);
}

md-select-menu.md-default-theme md-content md-option[selected],
md-select-menu md-content md-option[selected] {
  color: rgb(255, 105, 119);
}

md-select-menu.md-default-theme md-content md-option[selected]:focus,
md-select-menu md-content md-option[selected]:focus {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme .md-ripple,
.md-checkbox-enabled .md-ripple {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme .md-ink-ripple,
.md-checkbox-enabled .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

.md-checkbox-enabled.md-default-theme[selected] .md-ink-ripple,
.md-checkbox-enabled[selected] .md-ink-ripple {
  color: rgba(255, 134, 148, 0.87);
}

.md-checkbox-enabled.md-default-theme:not(.md-checked) .md-icon,
.md-checkbox-enabled:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

.md-checkbox-enabled.md-default-theme[selected] .md-icon,
.md-checkbox-enabled[selected] .md-icon {
  background-color: rgba(0, 121, 107, 0.87);
}

.md-checkbox-enabled.md-default-theme[selected].md-focused .md-container::before,
.md-checkbox-enabled[selected].md-focused .md-container::before {
  background-color: rgba(0, 121, 107, 0.26);
}

.md-checkbox-enabled.md-default-theme[selected] .md-icon::after,
.md-checkbox-enabled[selected] .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

.md-checkbox-enabled.md-default-theme .md-indeterminate[disabled] .md-container,
.md-checkbox-enabled .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

.md-checkbox-enabled.md-default-theme md-option .md-text,
.md-checkbox-enabled md-option .md-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-primary .md-focus-ring,
md-slider.md-primary .md-focus-ring {
  background-color: rgba(181, 74, 84, 0.38);
}

md-slider.md-default-theme.md-primary .md-track.md-track-fill,
md-slider.md-primary .md-track.md-track-fill {
  background-color: rgb(0, 121, 107);
}

md-slider.md-default-theme.md-primary .md-thumb::after,
md-slider.md-primary .md-thumb::after {
  border-color: rgb(0, 121, 107);
  background-color: rgb(0, 121, 107);
}

md-slider.md-default-theme.md-primary .md-sign,
md-slider.md-primary .md-sign {
  background-color: rgb(0, 121, 107);
}

md-slider.md-default-theme.md-primary .md-sign::after,
md-slider.md-primary .md-sign::after {
  border-top-color: rgb(0, 121, 107);
}

md-slider.md-default-theme.md-primary[md-vertical] .md-sign::after,
md-slider.md-primary[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 121, 107);
}

md-slider.md-default-theme.md-primary .md-thumb-text,
md-slider.md-primary .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme[disabled] .md-thumb::after,
md-slider[disabled] .md-thumb::after {
  border-color: rgba(0, 0, 0, 0);
}

md-slider-container[disabled]> :first-child:not(md-slider),
md-slider-container[disabled]> :last-child:not(md-slider) {
  color: rgba(255, 255, 255, 0.38);
}

.md-subheader.md-default-theme.md-primary,
.md-subheader.md-primary {
  color: rgb(255, 134, 148);
}

md-switch.md-default-theme.md-checked.md-primary .md-ink-ripple,
md-switch.md-checked.md-primary .md-ink-ripple {
  color: rgb(255, 134, 148);
}

md-switch.md-default-theme.md-checked.md-primary .md-thumb,
md-switch.md-checked.md-primary .md-thumb {
  background-color: rgb(0, 121, 107);
}

md-switch.md-default-theme.md-checked.md-primary .md-bar,
md-switch.md-checked.md-primary .md-bar {
  background-color: rgba(0, 121, 107, 0.5);
}

md-switch.md-default-theme.md-checked.md-primary.md-focused .md-thumb::before,
md-switch.md-checked.md-primary.md-focused .md-thumb::before {
  background-color: rgba(0, 121, 107, 0.26);
}

md-tabs.md-default-theme .md-paginator md-icon,
md-tabs .md-paginator md-icon {
  color: rgb(255, 134, 148);
}

md-tabs.md-default-theme .md-tab,
md-tabs .md-tab {
  color: rgba(255, 255, 255, 0.54);
}

md-tabs.md-default-theme .md-tab[disabled],
md-tabs .md-tab[disabled],
md-tabs.md-default-theme .md-tab[disabled] md-icon,
md-tabs .md-tab[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-tabs.md-default-theme .md-tab.md-active,
md-tabs .md-tab.md-active,
md-tabs.md-default-theme .md-tab.md-active md-icon,
md-tabs .md-tab.md-active md-icon,
md-tabs.md-default-theme .md-tab.md-focused,
md-tabs .md-tab.md-focused,
md-tabs.md-default-theme .md-tab.md-focused md-icon,
md-tabs .md-tab.md-focused md-icon {
  color: rgb(255, 134, 148);
}

md-tabs.md-default-theme .md-tab.md-focused,
md-tabs .md-tab.md-focused {
  background-image: initial;
  background-color: rgba(0, 121, 107, 0.1);
}

md-tabs.md-default-theme.md-primary>md-tabs-wrapper,
md-tabs.md-primary>md-tabs-wrapper {
  background-color: rgb(0, 121, 107);
}

md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper,
md-toolbar>md-tabs>md-tabs-wrapper {
  background-color: rgb(0, 121, 107);
}

md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toast.md-default-theme .md-toast-content .md-button.md-highlight.md-primary,
md-toast .md-toast-content .md-button.md-highlight.md-primary {
  color: rgb(255, 134, 148);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar),
md-toolbar:not(.md-menu-toolbar) {
  background-color: rgb(0, 121, 107);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar) md-icon,
md-toolbar:not(.md-menu-toolbar) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon,
md-toolbar:not(.md-menu-toolbar) .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

md-autocomplete.md-default-theme.md-hue-1 input,
md-autocomplete.md-hue-1 input {
  color: rgba(255, 255, 255, 0.87);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-1 li,
.md-autocomplete-suggestions-container.md-hue-1 li {
  color: rgba(255, 255, 255, 0.87);
}

md-bottom-sheet.md-default-theme.md-hue-1.md-list md-list-item,
md-bottom-sheet.md-hue-1.md-list md-list-item {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-primary,
.md-button.md-hue-1.md-primary {
  color: rgb(77, 182, 172);
}

.md-button.md-default-theme.md-hue-1.md-primary.md-fab,
.md-button.md-hue-1.md-primary.md-fab,
.md-button.md-default-theme.md-hue-1.md-primary.md-raised,
.md-button.md-hue-1.md-primary.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(202, 126, 133);
}

.md-button.md-default-theme.md-hue-1.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-hue-1.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-1.md-primary.md-raised:not([disabled]) md-icon,
.md-button.md-hue-1.md-primary.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-hue-1.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-primary.md-fab:not([disabled]):hover,
.md-button.md-hue-1.md-primary.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-1.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-hue-1.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-primary.md-raised:not([disabled]):hover,
.md-button.md-hue-1.md-primary.md-raised:not([disabled]):hover {
  background-color: rgb(0, 137, 123);
}

.md-button.md-default-theme.md-hue-1.md-primary:not([disabled]) md-icon,
.md-button.md-hue-1.md-primary:not([disabled]) md-icon {
  color: rgb(77, 182, 172);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-primary,
._md a.md-hue-1:not(.md-button).md-primary {
  color: rgb(77, 182, 172);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-primary:hover,
._md a.md-hue-1:not(.md-button).md-primary:hover {
  color: rgb(255, 134, 148);
}

md-card.md-default-theme.md-hue-1 md-card-header md-card-header-text .md-subhead,
md-card.md-hue-1 md-card-header md-card-header-text .md-subhead,
md-card.md-default-theme.md-hue-1 md-card-title md-card-title-text:not(:only-child) .md-subhead,
md-card.md-hue-1 md-card-title md-card-title-text:not(:only-child) .md-subhead {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-1 .md-ink-ripple,
md-checkbox.md-hue-1 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not(.md-checked) .md-icon,
md-checkbox.md-hue-1:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary .md-ripple,
md-checkbox.md-hue-1:not([disabled]).md-primary .md-ripple {
  color: rgb(255, 118, 132);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-ripple,
md-checkbox.md-hue-1:not([disabled]).md-primary.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary .md-ink-ripple,
md-checkbox.md-hue-1:not([disabled]).md-primary .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-checkbox.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple {
  color: rgba(77, 182, 172, 0.87);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary:not(.md-checked) .md-icon,
md-checkbox.md-hue-1:not([disabled]).md-primary:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-icon,
md-checkbox.md-hue-1:not([disabled]).md-primary.md-checked .md-icon {
  background-color: rgba(202, 126, 133, 0.87);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-1:not([disabled]).md-primary.md-checked.md-focused .md-container::before {
  background-color: rgba(202, 126, 133, 0.26);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-icon::after,
md-checkbox.md-hue-1:not([disabled]).md-primary.md-checked .md-icon::after {
  border-color: rgba(0, 0, 0, 0.87);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-primary .md-indeterminate[disabled] .md-container,
md-checkbox.md-hue-1:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

md-checkbox.md-default-theme.md-hue-1[disabled]:not(.md-checked) .md-icon,
md-checkbox.md-hue-1[disabled]:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-1[disabled] .md-icon::after,
md-checkbox.md-hue-1[disabled] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-1[disabled] .md-label,
md-checkbox.md-hue-1[disabled] .md-label {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-1 .md-chips,
md-chips.md-hue-1 .md-chips {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px;
}

md-chips.md-default-theme.md-hue-1 .md-chips.md-focused,
md-chips.md-hue-1 .md-chips.md-focused {
  box-shadow: rgb(202, 126, 133) 0px 2px;
}

md-chips.md-default-theme.md-hue-1 .md-chips .md-chip-input-container input,
md-chips.md-hue-1 .md-chips .md-chip-input-container input {
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-1 .md-chips .md-chip-input-container input::-webkit-input-placeholder,
md-chips.md-hue-1 .md-chips .md-chip-input-container input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-1 md-chip.md-focused,
md-chips.md-hue-1 md-chip.md-focused {
  background-image: initial;
  background-color: rgb(202, 126, 133);
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-1 md-chip.md-focused md-icon,
md-chips.md-hue-1 md-chip.md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-1 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator,
.md-hue-1 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {
  border-color: rgb(0, 150, 136);
}

.md-default-theme.md-hue-1 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled,
.md-hue-1 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {
  color: rgba(255, 105, 119, 0.6);
}

.md-default-theme.md-hue-1 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-1 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-1 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-1 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {
  background-image: initial;
  background-color: rgb(0, 150, 136);
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

.md-default-theme.md-hue-1 .md-calendar-date-disabled,
.md-hue-1 .md-calendar-date-disabled,
.md-default-theme.md-hue-1 .md-calendar-month-label-disabled,
.md-hue-1 .md-calendar-month-label-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-1 .md-datepicker-input,
.md-hue-1 .md-datepicker-input {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-1 .md-datepicker-input::-webkit-input-placeholder,
.md-hue-1 .md-datepicker-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-1 .md-datepicker-input-container,
.md-hue-1 .md-datepicker-input-container {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.md-default-theme.md-hue-1 .md-datepicker-input-container.md-datepicker-focused,
.md-hue-1 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(202, 126, 133);
}

.md-default-theme.md-hue-1 .md-datepicker-triangle-button .md-datepicker-expand-triangle,
.md-hue-1 .md-datepicker-triangle-button .md-datepicker-expand-triangle {
  border-top-color: rgba(0, 0, 0, 0.54);
}

.md-default-theme.md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon,
.md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(77, 182, 172);
}

md-dialog.md-default-theme.md-hue-1.md-content-overflow .md-actions,
md-dialog.md-hue-1.md-content-overflow .md-actions,
md-dialog.md-default-theme.md-hue-1.md-content-overflow md-dialog-actions,
md-dialog.md-hue-1.md-content-overflow md-dialog-actions,
md-divider.md-default-theme.md-hue-1,
md-divider.md-hue-1 {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.layout-gt-lg-row>md-divider.md-default-theme.md-hue-1,
.layout-gt-lg-row>md-divider.md-hue-1,
.layout-gt-md-row>md-divider.md-default-theme.md-hue-1,
.layout-gt-md-row>md-divider.md-hue-1,
.layout-gt-sm-row>md-divider.md-default-theme.md-hue-1,
.layout-gt-sm-row>md-divider.md-hue-1,
.layout-gt-xs-row>md-divider.md-default-theme.md-hue-1,
.layout-gt-xs-row>md-divider.md-hue-1,
.layout-lg-row>md-divider.md-default-theme.md-hue-1,
.layout-lg-row>md-divider.md-hue-1,
.layout-md-row>md-divider.md-default-theme.md-hue-1,
.layout-md-row>md-divider.md-hue-1,
.layout-row>md-divider.md-default-theme.md-hue-1,
.layout-row>md-divider.md-hue-1,
.layout-sm-row>md-divider.md-default-theme.md-hue-1,
.layout-sm-row>md-divider.md-hue-1,
.layout-xl-row>md-divider.md-default-theme.md-hue-1,
.layout-xl-row>md-divider.md-hue-1,
.layout-xs-row>md-divider.md-default-theme.md-hue-1,
.layout-xs-row>md-divider.md-hue-1 {
  border-right-color: rgba(0, 0, 0, 0.12);
}

md-icon.md-default-theme.md-hue-1,
md-icon.md-hue-1 {
  color: rgba(255, 255, 255, 0.54);
}

md-icon.md-default-theme.md-hue-1.md-primary,
md-icon.md-hue-1.md-primary {
  color: rgb(77, 182, 172);
}

md-input-container.md-default-theme.md-hue-1 .md-input,
md-input-container.md-hue-1 .md-input {
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0.12);
}

md-input-container.md-default-theme.md-hue-1 .md-input::-webkit-input-placeholder,
md-input-container.md-hue-1 .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-1>md-icon,
md-input-container.md-hue-1>md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-1 .md-placeholder,
md-input-container.md-hue-1 .md-placeholder,
md-input-container.md-default-theme.md-hue-1 label,
md-input-container.md-hue-1 label {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-focused):not(.md-input-invalid) label.md-required::after,
md-input-container.md-hue-1:not(.md-input-focused):not(.md-input-invalid) label.md-required::after {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-1 .md-input-message-animation .md-char-counter,
md-input-container.md-hue-1 .md-input-message-animation .md-char-counter,
md-input-container.md-default-theme.md-hue-1 .md-input-messages-animation .md-char-counter,
md-input-container.md-hue-1 .md-input-messages-animation .md-char-counter {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-1.md-input-focused .md-input::-webkit-input-placeholder,
md-input-container.md-hue-1.md-input-focused .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-has-value label,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-has-value label {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-resized .md-input,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-resized .md-input {
  border-color: rgb(202, 126, 133);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused label,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused label,
md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused md-icon,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused md-icon {
  color: rgb(77, 182, 172);
}

md-list.md-default-theme.md-hue-1 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-hue-1 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-1 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-hue-1 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-default-theme.md-hue-1 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-hue-1 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-1 md-list-item.md-3-line .md-list-item-text h4,
md-list.md-hue-1 md-list-item.md-3-line .md-list-item-text h4 {
  color: rgba(255, 255, 255, 0.87);
}

md-list.md-default-theme.md-hue-1 md-list-item.md-2-line .md-list-item-text p,
md-list.md-hue-1 md-list-item.md-2-line .md-list-item-text p,
md-list.md-default-theme.md-hue-1 md-list-item.md-3-line .md-list-item-text p,
md-list.md-hue-1 md-list-item.md-3-line .md-list-item-text p {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-1 md-list-item>md-icon,
md-list.md-hue-1 md-list-item>md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-1 md-list-item>md-icon.md-highlight,
md-list.md-hue-1 md-list-item>md-icon.md-highlight {
  color: rgb(77, 182, 172);
}

md-menu-content.md-default-theme.md-hue-1 md-menu-item,
md-menu-content.md-hue-1 md-menu-item {
  color: rgba(255, 255, 255, 0.87);
}

md-menu-content.md-default-theme.md-hue-1 md-menu-item md-icon,
md-menu-content.md-hue-1 md-menu-item md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-1 md-menu-item .md-button[disabled],
md-menu-content.md-hue-1 md-menu-item .md-button[disabled],
md-menu-content.md-default-theme.md-hue-1 md-menu-item .md-button[disabled] md-icon,
md-menu-content.md-hue-1 md-menu-item .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-menu-bar.md-default-theme.md-hue-1>button.md-button,
md-menu-bar.md-hue-1>button.md-button {
  color: rgba(255, 255, 255, 0.54);
}

md-toolbar.md-default-theme.md-hue-1.md-menu-toolbar md-toolbar-filler,
md-toolbar.md-hue-1.md-menu-toolbar md-toolbar-filler {
  background-color: rgb(202, 126, 133);
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-1 .md-button._md-nav-button.md-unselected,
md-nav-bar.md-hue-1 .md-button._md-nav-button.md-unselected {
  color: rgba(255, 255, 255, 0.54);
}

md-nav-bar.md-default-theme.md-hue-1.md-primary>.md-nav-bar,
md-nav-bar.md-hue-1.md-primary>.md-nav-bar {
  background-color: rgb(202, 126, 133);
}

md-nav-bar.md-default-theme.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-nav-bar.md-default-theme.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar,
md-toolbar>md-nav-bar.md-hue-1>.md-nav-bar {
  background-color: rgb(202, 126, 133);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button,
md-toolbar>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-progress-linear.md-default-theme.md-hue-1 .md-container,
md-progress-linear.md-hue-1 .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-1 .md-bar,
md-progress-linear.md-hue-1 .md-bar {
  background-color: rgb(202, 126, 133);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-primary .md-bar1,
md-progress-linear.md-hue-1[md-mode="buffer"].md-primary .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-primary .md-dashed::before,
md-progress-linear.md-hue-1[md-mode="buffer"].md-primary .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-1 .md-off,
md-radio-button.md-hue-1 .md-off {
  border-color: rgba(0, 0, 0, 0.54);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary .md-on,
md-radio-button.md-hue-1:not([disabled]).md-primary .md-on,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-on,
md-radio-button.md-hue-1:not([disabled]) .md-primary .md-on,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary .md-on,
md-radio-group.md-hue-1:not([disabled]).md-primary .md-on,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-on,
md-radio-group.md-hue-1:not([disabled]) .md-primary .md-on {
  background-color: rgba(202, 126, 133, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]) .md-primary .md-checked .md-off {
  border-color: rgba(202, 126, 133, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-primary .md-checked .md-ink-ripple {
  color: rgba(77, 182, 172, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-hue-1:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-hue-1:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-primary .md-container .md-ripple {
  color: rgb(255, 118, 132);
}

md-radio-button.md-default-theme.md-hue-1[disabled],
md-radio-button.md-hue-1[disabled],
md-radio-group.md-default-theme.md-hue-1[disabled],
md-radio-group.md-hue-1[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

md-radio-button.md-default-theme.md-hue-1[disabled] .md-container .md-off,
md-radio-button.md-hue-1[disabled] .md-container .md-off,
md-radio-button.md-default-theme.md-hue-1[disabled] .md-container .md-on,
md-radio-button.md-hue-1[disabled] .md-container .md-on,
md-radio-group.md-default-theme.md-hue-1[disabled] .md-container .md-off,
md-radio-group.md-hue-1[disabled] .md-container .md-off,
md-radio-group.md-default-theme.md-hue-1[disabled] .md-container .md-on,
md-radio-group.md-hue-1[disabled] .md-container .md-on {
  border-color: rgba(0, 0, 0, 0.38);
}

md-radio-group.md-default-theme.md-hue-1 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-hue-1 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1.md-primary .md-checked:not([disabled]) .md-ink-ripple,
md-radio-group.md-hue-1.md-primary .md-checked:not([disabled]) .md-ink-ripple {
  color: rgba(77, 182, 172, 0.26);
}

md-radio-group.md-default-theme.md-hue-1.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-hue-1.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-default-theme.md-hue-1.md-focused:not(:empty).md-primary .md-checked .md-container::before,
md-radio-group.md-hue-1.md-focused:not(:empty).md-primary .md-checked .md-container::before {
  background-color: rgba(202, 126, 133, 0.26);
}

md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-default-theme.md-hue-1 .md-select-value span:first-child::after,
md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-hue-1 .md-select-value span:first-child::after {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-1 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-1 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-1 .md-select-value.md-select-placeholder,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-1 .md-select-value.md-select-placeholder {
  color: rgb(77, 182, 172);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-1.md-no-underline .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-1.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-1 .md-select-value,
md-select.md-hue-1 .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

md-select.md-default-theme.md-hue-1 .md-select-value.md-select-placeholder,
md-select.md-hue-1 .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-1.md-no-underline .md-select-value,
md-select.md-hue-1.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-1.ng-invalid.ng-touched.md-no-underline .md-select-value,
md-select.md-hue-1.ng-invalid.ng-touched.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-1:not([disabled]):focus .md-select-value,
md-select.md-hue-1:not([disabled]):focus .md-select-value {
  border-bottom-color: rgb(202, 126, 133);
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-1:not([disabled]):focus .md-select-value.md-select-placeholder,
md-select.md-hue-1:not([disabled]):focus .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-1:not([disabled]):focus.md-no-underline .md-select-value,
md-select.md-hue-1:not([disabled]):focus.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-1[disabled] .md-select-icon,
md-select.md-hue-1[disabled] .md-select-icon,
md-select.md-default-theme.md-hue-1[disabled] .md-select-value,
md-select.md-hue-1[disabled] .md-select-value,
md-select.md-default-theme.md-hue-1[disabled] .md-select-value.md-select-placeholder,
md-select.md-hue-1[disabled] .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-1 .md-select-icon,
md-select.md-hue-1 .md-select-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-optgroup,
md-select-menu.md-hue-1 md-content md-optgroup {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option,
md-select-menu.md-hue-1 md-content md-option {
  color: rgba(255, 255, 255, 0.87);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option[disabled] .md-text,
md-select-menu.md-hue-1 md-content md-option[disabled] .md-text {
  color: rgba(255, 255, 255, 0.38);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option[selected],
md-select-menu.md-hue-1 md-content md-option[selected] {
  color: rgb(255, 105, 119);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option[selected]:focus,
md-select-menu.md-hue-1 md-content md-option[selected]:focus {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-1 .md-ripple,
.md-checkbox-enabled.md-hue-1 .md-ripple {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-1 .md-ink-ripple,
.md-checkbox-enabled.md-hue-1 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-1[selected] .md-ink-ripple,
.md-checkbox-enabled.md-hue-1[selected] .md-ink-ripple {
  color: rgba(77, 182, 172, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-1:not(.md-checked) .md-icon,
.md-checkbox-enabled.md-hue-1:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-1[selected] .md-icon,
.md-checkbox-enabled.md-hue-1[selected] .md-icon {
  background-color: rgba(202, 126, 133, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-1[selected].md-focused .md-container::before,
.md-checkbox-enabled.md-hue-1[selected].md-focused .md-container::before {
  background-color: rgba(202, 126, 133, 0.26);
}

.md-checkbox-enabled.md-default-theme.md-hue-1[selected] .md-icon::after,
.md-checkbox-enabled.md-hue-1[selected] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-1 .md-indeterminate[disabled] .md-container,
.md-checkbox-enabled.md-hue-1 .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

.md-checkbox-enabled.md-default-theme.md-hue-1 md-option .md-text,
.md-checkbox-enabled.md-hue-1 md-option .md-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-focus-ring,
md-slider.md-hue-1.md-primary .md-focus-ring {
  background-color: rgba(181, 74, 84, 0.38);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-track.md-track-fill,
md-slider.md-hue-1.md-primary .md-track.md-track-fill {
  background-color: rgb(202, 126, 133);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-thumb::after,
md-slider.md-hue-1.md-primary .md-thumb::after {
  border-color: rgb(202, 126, 133);
  background-color: rgb(202, 126, 133);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-sign,
md-slider.md-hue-1.md-primary .md-sign {
  background-color: rgb(202, 126, 133);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-sign::after,
md-slider.md-hue-1.md-primary .md-sign::after {
  border-top-color: rgb(202, 126, 133);
}

md-slider.md-default-theme.md-hue-1.md-primary[md-vertical] .md-sign::after,
md-slider.md-hue-1.md-primary[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(202, 126, 133);
}

md-slider.md-default-theme.md-hue-1.md-primary .md-thumb-text,
md-slider.md-hue-1.md-primary .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-1[disabled] .md-thumb::after,
md-slider.md-hue-1[disabled] .md-thumb::after {
  border-color: rgba(0, 0, 0, 0);
}

md-slider-container[disabled]> :first-child:not(md-slider),
md-slider-container[disabled]> :last-child:not(md-slider) {
  color: rgba(255, 255, 255, 0.38);
}

.md-subheader.md-default-theme.md-hue-1.md-primary,
.md-subheader.md-hue-1.md-primary {
  color: rgb(77, 182, 172);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-primary .md-ink-ripple,
md-switch.md-hue-1.md-checked.md-primary .md-ink-ripple {
  color: rgb(77, 182, 172);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-primary .md-thumb,
md-switch.md-hue-1.md-checked.md-primary .md-thumb {
  background-color: rgb(202, 126, 133);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-primary .md-bar,
md-switch.md-hue-1.md-checked.md-primary .md-bar {
  background-color: rgba(202, 126, 133, 0.5);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-primary.md-focused .md-thumb::before,
md-switch.md-hue-1.md-checked.md-primary.md-focused .md-thumb::before {
  background-color: rgba(202, 126, 133, 0.26);
}

md-tabs.md-default-theme.md-hue-1 .md-paginator md-icon,
md-tabs.md-hue-1 .md-paginator md-icon {
  color: rgb(77, 182, 172);
}

md-tabs.md-default-theme.md-hue-1 .md-tab,
md-tabs.md-hue-1 .md-tab {
  color: rgba(255, 255, 255, 0.54);
}

md-tabs.md-default-theme.md-hue-1 .md-tab[disabled],
md-tabs.md-hue-1 .md-tab[disabled],
md-tabs.md-default-theme.md-hue-1 .md-tab[disabled] md-icon,
md-tabs.md-hue-1 .md-tab[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-tabs.md-default-theme.md-hue-1 .md-tab.md-active,
md-tabs.md-hue-1 .md-tab.md-active,
md-tabs.md-default-theme.md-hue-1 .md-tab.md-active md-icon,
md-tabs.md-hue-1 .md-tab.md-active md-icon,
md-tabs.md-default-theme.md-hue-1 .md-tab.md-focused,
md-tabs.md-hue-1 .md-tab.md-focused,
md-tabs.md-default-theme.md-hue-1 .md-tab.md-focused md-icon,
md-tabs.md-hue-1 .md-tab.md-focused md-icon {
  color: rgb(77, 182, 172);
}

md-tabs.md-default-theme.md-hue-1 .md-tab.md-focused,
md-tabs.md-hue-1 .md-tab.md-focused {
  background-image: initial;
  background-color: rgba(202, 126, 133, 0.1);
}

md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper {
  background-color: rgb(202, 126, 133);
}

md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper {
  background-color: rgb(202, 126, 133);
}

md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toast.md-default-theme.md-hue-1 .md-toast-content .md-button.md-highlight.md-primary,
md-toast.md-hue-1 .md-toast-content .md-button.md-highlight.md-primary {
  color: rgb(77, 182, 172);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar),
md-toolbar.md-hue-1:not(.md-menu-toolbar) {
  background-color: rgb(202, 126, 133);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar) md-icon,
md-toolbar.md-hue-1:not(.md-menu-toolbar) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar) .md-button[disabled] md-icon,
md-toolbar.md-hue-1:not(.md-menu-toolbar) .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

md-autocomplete.md-default-theme.md-hue-2 input,
md-autocomplete.md-hue-2 input {
  color: rgba(255, 255, 255, 0.87);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-2 li,
.md-autocomplete-suggestions-container.md-hue-2 li {
  color: rgba(255, 255, 255, 0.87);
}

md-bottom-sheet.md-default-theme.md-hue-2.md-list md-list-item,
md-bottom-sheet.md-hue-2.md-list md-list-item {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-primary,
.md-button.md-hue-2.md-primary {
  color: rgb(255, 150, 163);
}

.md-button.md-default-theme.md-hue-2.md-primary.md-fab,
.md-button.md-hue-2.md-primary.md-fab,
.md-button.md-default-theme.md-hue-2.md-primary.md-raised,
.md-button.md-hue-2.md-primary.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(0, 105, 92);
}

.md-button.md-default-theme.md-hue-2.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-hue-2.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-2.md-primary.md-raised:not([disabled]) md-icon,
.md-button.md-hue-2.md-primary.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-hue-2.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-primary.md-fab:not([disabled]):hover,
.md-button.md-hue-2.md-primary.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-2.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-hue-2.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-primary.md-raised:not([disabled]):hover,
.md-button.md-hue-2.md-primary.md-raised:not([disabled]):hover {
  background-color: rgb(0, 137, 123);
}

.md-button.md-default-theme.md-hue-2.md-primary:not([disabled]) md-icon,
.md-button.md-hue-2.md-primary:not([disabled]) md-icon {
  color: rgb(255, 150, 163);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-primary,
._md a.md-hue-2:not(.md-button).md-primary {
  color: rgb(255, 150, 163);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-primary:hover,
._md a.md-hue-2:not(.md-button).md-primary:hover {
  color: rgb(255, 134, 148);
}

md-card.md-default-theme.md-hue-2 md-card-header md-card-header-text .md-subhead,
md-card.md-hue-2 md-card-header md-card-header-text .md-subhead,
md-card.md-default-theme.md-hue-2 md-card-title md-card-title-text:not(:only-child) .md-subhead,
md-card.md-hue-2 md-card-title md-card-title-text:not(:only-child) .md-subhead {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-2 .md-ink-ripple,
md-checkbox.md-hue-2 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not(.md-checked) .md-icon,
md-checkbox.md-hue-2:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary .md-ripple,
md-checkbox.md-hue-2:not([disabled]).md-primary .md-ripple {
  color: rgb(255, 118, 132);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-ripple,
md-checkbox.md-hue-2:not([disabled]).md-primary.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary .md-ink-ripple,
md-checkbox.md-hue-2:not([disabled]).md-primary .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-checkbox.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple {
  color: rgba(255, 150, 163, 0.87);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary:not(.md-checked) .md-icon,
md-checkbox.md-hue-2:not([disabled]).md-primary:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-icon,
md-checkbox.md-hue-2:not([disabled]).md-primary.md-checked .md-icon {
  background-color: rgba(0, 105, 92, 0.87);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-2:not([disabled]).md-primary.md-checked.md-focused .md-container::before {
  background-color: rgba(0, 105, 92, 0.26);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-icon::after,
md-checkbox.md-hue-2:not([disabled]).md-primary.md-checked .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-primary .md-indeterminate[disabled] .md-container,
md-checkbox.md-hue-2:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

md-checkbox.md-default-theme.md-hue-2[disabled]:not(.md-checked) .md-icon,
md-checkbox.md-hue-2[disabled]:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-2[disabled] .md-icon::after,
md-checkbox.md-hue-2[disabled] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-2[disabled] .md-label,
md-checkbox.md-hue-2[disabled] .md-label {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-2 .md-chips,
md-chips.md-hue-2 .md-chips {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px;
}

md-chips.md-default-theme.md-hue-2 .md-chips.md-focused,
md-chips.md-hue-2 .md-chips.md-focused {
  box-shadow: rgb(0, 105, 92) 0px 2px;
}

md-chips.md-default-theme.md-hue-2 .md-chips .md-chip-input-container input,
md-chips.md-hue-2 .md-chips .md-chip-input-container input {
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-2 .md-chips .md-chip-input-container input::-webkit-input-placeholder,
md-chips.md-hue-2 .md-chips .md-chip-input-container input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-2 md-chip.md-focused,
md-chips.md-hue-2 md-chip.md-focused {
  background-image: initial;
  background-color: rgb(0, 105, 92);
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-2 md-chip.md-focused md-icon,
md-chips.md-hue-2 md-chip.md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-2 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator,
.md-hue-2 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {
  border-color: rgb(0, 150, 136);
}

.md-default-theme.md-hue-2 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled,
.md-hue-2 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {
  color: rgba(255, 105, 119, 0.6);
}

.md-default-theme.md-hue-2 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-2 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-2 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-2 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {
  background-image: initial;
  background-color: rgb(0, 150, 136);
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

.md-default-theme.md-hue-2 .md-calendar-date-disabled,
.md-hue-2 .md-calendar-date-disabled,
.md-default-theme.md-hue-2 .md-calendar-month-label-disabled,
.md-hue-2 .md-calendar-month-label-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-2 .md-datepicker-input,
.md-hue-2 .md-datepicker-input {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-2 .md-datepicker-input::-webkit-input-placeholder,
.md-hue-2 .md-datepicker-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-2 .md-datepicker-input-container,
.md-hue-2 .md-datepicker-input-container {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.md-default-theme.md-hue-2 .md-datepicker-input-container.md-datepicker-focused,
.md-hue-2 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(0, 105, 92);
}

.md-default-theme.md-hue-2 .md-datepicker-triangle-button .md-datepicker-expand-triangle,
.md-hue-2 .md-datepicker-triangle-button .md-datepicker-expand-triangle {
  border-top-color: rgba(0, 0, 0, 0.54);
}

.md-default-theme.md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon,
.md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(255, 150, 163);
}

md-dialog.md-default-theme.md-hue-2.md-content-overflow .md-actions,
md-dialog.md-hue-2.md-content-overflow .md-actions,
md-dialog.md-default-theme.md-hue-2.md-content-overflow md-dialog-actions,
md-dialog.md-hue-2.md-content-overflow md-dialog-actions,
md-divider.md-default-theme.md-hue-2,
md-divider.md-hue-2 {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.layout-gt-lg-row>md-divider.md-default-theme.md-hue-2,
.layout-gt-lg-row>md-divider.md-hue-2,
.layout-gt-md-row>md-divider.md-default-theme.md-hue-2,
.layout-gt-md-row>md-divider.md-hue-2,
.layout-gt-sm-row>md-divider.md-default-theme.md-hue-2,
.layout-gt-sm-row>md-divider.md-hue-2,
.layout-gt-xs-row>md-divider.md-default-theme.md-hue-2,
.layout-gt-xs-row>md-divider.md-hue-2,
.layout-lg-row>md-divider.md-default-theme.md-hue-2,
.layout-lg-row>md-divider.md-hue-2,
.layout-md-row>md-divider.md-default-theme.md-hue-2,
.layout-md-row>md-divider.md-hue-2,
.layout-row>md-divider.md-default-theme.md-hue-2,
.layout-row>md-divider.md-hue-2,
.layout-sm-row>md-divider.md-default-theme.md-hue-2,
.layout-sm-row>md-divider.md-hue-2,
.layout-xl-row>md-divider.md-default-theme.md-hue-2,
.layout-xl-row>md-divider.md-hue-2,
.layout-xs-row>md-divider.md-default-theme.md-hue-2,
.layout-xs-row>md-divider.md-hue-2 {
  border-right-color: rgba(0, 0, 0, 0.12);
}

md-icon.md-default-theme.md-hue-2,
md-icon.md-hue-2 {
  color: rgba(255, 255, 255, 0.54);
}

md-icon.md-default-theme.md-hue-2.md-primary,
md-icon.md-hue-2.md-primary {
  color: rgb(255, 150, 163);
}

md-input-container.md-default-theme.md-hue-2 .md-input,
md-input-container.md-hue-2 .md-input {
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0.12);
}

md-input-container.md-default-theme.md-hue-2 .md-input::-webkit-input-placeholder,
md-input-container.md-hue-2 .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-2>md-icon,
md-input-container.md-hue-2>md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-2 .md-placeholder,
md-input-container.md-hue-2 .md-placeholder,
md-input-container.md-default-theme.md-hue-2 label,
md-input-container.md-hue-2 label {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-focused):not(.md-input-invalid) label.md-required::after,
md-input-container.md-hue-2:not(.md-input-focused):not(.md-input-invalid) label.md-required::after {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-2 .md-input-message-animation .md-char-counter,
md-input-container.md-hue-2 .md-input-message-animation .md-char-counter,
md-input-container.md-default-theme.md-hue-2 .md-input-messages-animation .md-char-counter,
md-input-container.md-hue-2 .md-input-messages-animation .md-char-counter {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-2.md-input-focused .md-input::-webkit-input-placeholder,
md-input-container.md-hue-2.md-input-focused .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-has-value label,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-has-value label {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-resized .md-input,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-resized .md-input {
  border-color: rgb(0, 105, 92);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused label,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused label,
md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused md-icon,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused md-icon {
  color: rgb(255, 150, 163);
}

md-list.md-default-theme.md-hue-2 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-hue-2 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-2 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-hue-2 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-default-theme.md-hue-2 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-hue-2 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-2 md-list-item.md-3-line .md-list-item-text h4,
md-list.md-hue-2 md-list-item.md-3-line .md-list-item-text h4 {
  color: rgba(255, 255, 255, 0.87);
}

md-list.md-default-theme.md-hue-2 md-list-item.md-2-line .md-list-item-text p,
md-list.md-hue-2 md-list-item.md-2-line .md-list-item-text p,
md-list.md-default-theme.md-hue-2 md-list-item.md-3-line .md-list-item-text p,
md-list.md-hue-2 md-list-item.md-3-line .md-list-item-text p {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-2 md-list-item>md-icon,
md-list.md-hue-2 md-list-item>md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-2 md-list-item>md-icon.md-highlight,
md-list.md-hue-2 md-list-item>md-icon.md-highlight {
  color: rgb(255, 150, 163);
}

md-menu-content.md-default-theme.md-hue-2 md-menu-item,
md-menu-content.md-hue-2 md-menu-item {
  color: rgba(255, 255, 255, 0.87);
}

md-menu-content.md-default-theme.md-hue-2 md-menu-item md-icon,
md-menu-content.md-hue-2 md-menu-item md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-2 md-menu-item .md-button[disabled],
md-menu-content.md-hue-2 md-menu-item .md-button[disabled],
md-menu-content.md-default-theme.md-hue-2 md-menu-item .md-button[disabled] md-icon,
md-menu-content.md-hue-2 md-menu-item .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-menu-bar.md-default-theme.md-hue-2>button.md-button,
md-menu-bar.md-hue-2>button.md-button {
  color: rgba(255, 255, 255, 0.54);
}

md-toolbar.md-default-theme.md-hue-2.md-menu-toolbar md-toolbar-filler,
md-toolbar.md-hue-2.md-menu-toolbar md-toolbar-filler {
  background-color: rgb(0, 105, 92);
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-2 .md-button._md-nav-button.md-unselected,
md-nav-bar.md-hue-2 .md-button._md-nav-button.md-unselected {
  color: rgba(255, 255, 255, 0.54);
}

md-nav-bar.md-default-theme.md-hue-2.md-primary>.md-nav-bar,
md-nav-bar.md-hue-2.md-primary>.md-nav-bar {
  background-color: rgb(0, 105, 92);
}

md-nav-bar.md-default-theme.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-nav-bar.md-default-theme.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar,
md-toolbar>md-nav-bar.md-hue-2>.md-nav-bar {
  background-color: rgb(0, 105, 92);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button,
md-toolbar>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-progress-linear.md-default-theme.md-hue-2 .md-container,
md-progress-linear.md-hue-2 .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-2 .md-bar,
md-progress-linear.md-hue-2 .md-bar {
  background-color: rgb(0, 105, 92);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-primary .md-bar1,
md-progress-linear.md-hue-2[md-mode="buffer"].md-primary .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-primary .md-dashed::before,
md-progress-linear.md-hue-2[md-mode="buffer"].md-primary .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-2 .md-off,
md-radio-button.md-hue-2 .md-off {
  border-color: rgba(0, 0, 0, 0.54);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary .md-on,
md-radio-button.md-hue-2:not([disabled]).md-primary .md-on,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-on,
md-radio-button.md-hue-2:not([disabled]) .md-primary .md-on,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary .md-on,
md-radio-group.md-hue-2:not([disabled]).md-primary .md-on,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-on,
md-radio-group.md-hue-2:not([disabled]) .md-primary .md-on {
  background-color: rgba(0, 105, 92, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]) .md-primary .md-checked .md-off {
  border-color: rgba(0, 105, 92, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-primary .md-checked .md-ink-ripple {
  color: rgba(255, 150, 163, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-hue-2:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-hue-2:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-primary .md-container .md-ripple {
  color: rgb(255, 118, 132);
}

md-radio-button.md-default-theme.md-hue-2[disabled],
md-radio-button.md-hue-2[disabled],
md-radio-group.md-default-theme.md-hue-2[disabled],
md-radio-group.md-hue-2[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

md-radio-button.md-default-theme.md-hue-2[disabled] .md-container .md-off,
md-radio-button.md-hue-2[disabled] .md-container .md-off,
md-radio-button.md-default-theme.md-hue-2[disabled] .md-container .md-on,
md-radio-button.md-hue-2[disabled] .md-container .md-on,
md-radio-group.md-default-theme.md-hue-2[disabled] .md-container .md-off,
md-radio-group.md-hue-2[disabled] .md-container .md-off,
md-radio-group.md-default-theme.md-hue-2[disabled] .md-container .md-on,
md-radio-group.md-hue-2[disabled] .md-container .md-on {
  border-color: rgba(0, 0, 0, 0.38);
}

md-radio-group.md-default-theme.md-hue-2 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-hue-2 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2.md-primary .md-checked:not([disabled]) .md-ink-ripple,
md-radio-group.md-hue-2.md-primary .md-checked:not([disabled]) .md-ink-ripple {
  color: rgba(255, 150, 163, 0.26);
}

md-radio-group.md-default-theme.md-hue-2.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-hue-2.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-default-theme.md-hue-2.md-focused:not(:empty).md-primary .md-checked .md-container::before,
md-radio-group.md-hue-2.md-focused:not(:empty).md-primary .md-checked .md-container::before {
  background-color: rgba(0, 105, 92, 0.26);
}

md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-default-theme.md-hue-2 .md-select-value span:first-child::after,
md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-hue-2 .md-select-value span:first-child::after {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-2 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-2 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-2 .md-select-value.md-select-placeholder,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-2 .md-select-value.md-select-placeholder {
  color: rgb(255, 150, 163);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-2.md-no-underline .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-2.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-2 .md-select-value,
md-select.md-hue-2 .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

md-select.md-default-theme.md-hue-2 .md-select-value.md-select-placeholder,
md-select.md-hue-2 .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-2.md-no-underline .md-select-value,
md-select.md-hue-2.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-2.ng-invalid.ng-touched.md-no-underline .md-select-value,
md-select.md-hue-2.ng-invalid.ng-touched.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-2:not([disabled]):focus .md-select-value,
md-select.md-hue-2:not([disabled]):focus .md-select-value {
  border-bottom-color: rgb(0, 105, 92);
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-2:not([disabled]):focus .md-select-value.md-select-placeholder,
md-select.md-hue-2:not([disabled]):focus .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-2:not([disabled]):focus.md-no-underline .md-select-value,
md-select.md-hue-2:not([disabled]):focus.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-2[disabled] .md-select-icon,
md-select.md-hue-2[disabled] .md-select-icon,
md-select.md-default-theme.md-hue-2[disabled] .md-select-value,
md-select.md-hue-2[disabled] .md-select-value,
md-select.md-default-theme.md-hue-2[disabled] .md-select-value.md-select-placeholder,
md-select.md-hue-2[disabled] .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-2 .md-select-icon,
md-select.md-hue-2 .md-select-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-optgroup,
md-select-menu.md-hue-2 md-content md-optgroup {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option,
md-select-menu.md-hue-2 md-content md-option {
  color: rgba(255, 255, 255, 0.87);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option[disabled] .md-text,
md-select-menu.md-hue-2 md-content md-option[disabled] .md-text {
  color: rgba(255, 255, 255, 0.38);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option[selected],
md-select-menu.md-hue-2 md-content md-option[selected] {
  color: rgb(255, 105, 119);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option[selected]:focus,
md-select-menu.md-hue-2 md-content md-option[selected]:focus {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-2 .md-ripple,
.md-checkbox-enabled.md-hue-2 .md-ripple {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-2 .md-ink-ripple,
.md-checkbox-enabled.md-hue-2 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-2[selected] .md-ink-ripple,
.md-checkbox-enabled.md-hue-2[selected] .md-ink-ripple {
  color: rgba(255, 150, 163, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-2:not(.md-checked) .md-icon,
.md-checkbox-enabled.md-hue-2:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-2[selected] .md-icon,
.md-checkbox-enabled.md-hue-2[selected] .md-icon {
  background-color: rgba(0, 105, 92, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-2[selected].md-focused .md-container::before,
.md-checkbox-enabled.md-hue-2[selected].md-focused .md-container::before {
  background-color: rgba(0, 105, 92, 0.26);
}

.md-checkbox-enabled.md-default-theme.md-hue-2[selected] .md-icon::after,
.md-checkbox-enabled.md-hue-2[selected] .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-2 .md-indeterminate[disabled] .md-container,
.md-checkbox-enabled.md-hue-2 .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

.md-checkbox-enabled.md-default-theme.md-hue-2 md-option .md-text,
.md-checkbox-enabled.md-hue-2 md-option .md-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-focus-ring,
md-slider.md-hue-2.md-primary .md-focus-ring {
  background-color: rgba(181, 74, 84, 0.38);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-track.md-track-fill,
md-slider.md-hue-2.md-primary .md-track.md-track-fill {
  background-color: rgb(0, 105, 92);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-thumb::after,
md-slider.md-hue-2.md-primary .md-thumb::after {
  border-color: rgb(0, 105, 92);
  background-color: rgb(0, 105, 92);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-sign,
md-slider.md-hue-2.md-primary .md-sign {
  background-color: rgb(0, 105, 92);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-sign::after,
md-slider.md-hue-2.md-primary .md-sign::after {
  border-top-color: rgb(0, 105, 92);
}

md-slider.md-default-theme.md-hue-2.md-primary[md-vertical] .md-sign::after,
md-slider.md-hue-2.md-primary[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 105, 92);
}

md-slider.md-default-theme.md-hue-2.md-primary .md-thumb-text,
md-slider.md-hue-2.md-primary .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-2[disabled] .md-thumb::after,
md-slider.md-hue-2[disabled] .md-thumb::after {
  border-color: rgba(0, 0, 0, 0);
}

md-slider-container[disabled]> :first-child:not(md-slider),
md-slider-container[disabled]> :last-child:not(md-slider) {
  color: rgba(255, 255, 255, 0.38);
}

.md-subheader.md-default-theme.md-hue-2.md-primary,
.md-subheader.md-hue-2.md-primary {
  color: rgb(255, 150, 163);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-primary .md-ink-ripple,
md-switch.md-hue-2.md-checked.md-primary .md-ink-ripple {
  color: rgb(255, 150, 163);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-primary .md-thumb,
md-switch.md-hue-2.md-checked.md-primary .md-thumb {
  background-color: rgb(0, 105, 92);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-primary .md-bar,
md-switch.md-hue-2.md-checked.md-primary .md-bar {
  background-color: rgba(0, 105, 92, 0.5);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-primary.md-focused .md-thumb::before,
md-switch.md-hue-2.md-checked.md-primary.md-focused .md-thumb::before {
  background-color: rgba(0, 105, 92, 0.26);
}

md-tabs.md-default-theme.md-hue-2 .md-paginator md-icon,
md-tabs.md-hue-2 .md-paginator md-icon {
  color: rgb(255, 150, 163);
}

md-tabs.md-default-theme.md-hue-2 .md-tab,
md-tabs.md-hue-2 .md-tab {
  color: rgba(255, 255, 255, 0.54);
}

md-tabs.md-default-theme.md-hue-2 .md-tab[disabled],
md-tabs.md-hue-2 .md-tab[disabled],
md-tabs.md-default-theme.md-hue-2 .md-tab[disabled] md-icon,
md-tabs.md-hue-2 .md-tab[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-tabs.md-default-theme.md-hue-2 .md-tab.md-active,
md-tabs.md-hue-2 .md-tab.md-active,
md-tabs.md-default-theme.md-hue-2 .md-tab.md-active md-icon,
md-tabs.md-hue-2 .md-tab.md-active md-icon,
md-tabs.md-default-theme.md-hue-2 .md-tab.md-focused,
md-tabs.md-hue-2 .md-tab.md-focused,
md-tabs.md-default-theme.md-hue-2 .md-tab.md-focused md-icon,
md-tabs.md-hue-2 .md-tab.md-focused md-icon {
  color: rgb(255, 150, 163);
}

md-tabs.md-default-theme.md-hue-2 .md-tab.md-focused,
md-tabs.md-hue-2 .md-tab.md-focused {
  background-image: initial;
  background-color: rgba(0, 105, 92, 0.1);
}

md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper {
  background-color: rgb(0, 105, 92);
}

md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper {
  background-color: rgb(0, 105, 92);
}

md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toast.md-default-theme.md-hue-2 .md-toast-content .md-button.md-highlight.md-primary,
md-toast.md-hue-2 .md-toast-content .md-button.md-highlight.md-primary {
  color: rgb(255, 150, 163);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar),
md-toolbar.md-hue-2:not(.md-menu-toolbar) {
  background-color: rgb(0, 105, 92);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar) md-icon,
md-toolbar.md-hue-2:not(.md-menu-toolbar) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar) .md-button[disabled] md-icon,
md-toolbar.md-hue-2:not(.md-menu-toolbar) .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

md-autocomplete.md-default-theme.md-hue-3 input,
md-autocomplete.md-hue-3 input {
  color: rgba(255, 255, 255, 0.87);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-3 li,
.md-autocomplete-suggestions-container.md-hue-3 li {
  color: rgba(255, 255, 255, 0.87);
}

md-bottom-sheet.md-default-theme.md-hue-3.md-list md-list-item,
md-bottom-sheet.md-hue-3.md-list md-list-item {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-primary,
.md-button.md-hue-3.md-primary {
  color: rgb(167, 255, 235);
}

.md-button.md-default-theme.md-hue-3.md-primary.md-fab,
.md-button.md-hue-3.md-primary.md-fab,
.md-button.md-default-theme.md-hue-3.md-primary.md-raised,
.md-button.md-hue-3.md-primary.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(165, 0, 37);
}

.md-button.md-default-theme.md-hue-3.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-hue-3.md-primary.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-3.md-primary.md-raised:not([disabled]) md-icon,
.md-button.md-hue-3.md-primary.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-hue-3.md-primary.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-primary.md-fab:not([disabled]):hover,
.md-button.md-hue-3.md-primary.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-3.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-hue-3.md-primary.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-primary.md-raised:not([disabled]):hover,
.md-button.md-hue-3.md-primary.md-raised:not([disabled]):hover {
  background-color: rgb(0, 137, 123);
}

.md-button.md-default-theme.md-hue-3.md-primary:not([disabled]) md-icon,
.md-button.md-hue-3.md-primary:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-primary,
._md a.md-hue-3:not(.md-button).md-primary {
  color: rgb(167, 255, 235);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-primary:hover,
._md a.md-hue-3:not(.md-button).md-primary:hover {
  color: rgb(255, 134, 148);
}

md-card.md-default-theme.md-hue-3 md-card-header md-card-header-text .md-subhead,
md-card.md-hue-3 md-card-header md-card-header-text .md-subhead,
md-card.md-default-theme.md-hue-3 md-card-title md-card-title-text:not(:only-child) .md-subhead,
md-card.md-hue-3 md-card-title md-card-title-text:not(:only-child) .md-subhead {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-3 .md-ink-ripple,
md-checkbox.md-hue-3 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not(.md-checked) .md-icon,
md-checkbox.md-hue-3:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary .md-ripple,
md-checkbox.md-hue-3:not([disabled]).md-primary .md-ripple {
  color: rgb(255, 118, 132);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-ripple,
md-checkbox.md-hue-3:not([disabled]).md-primary.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary .md-ink-ripple,
md-checkbox.md-hue-3:not([disabled]).md-primary .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-checkbox.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple {
  color: rgba(167, 255, 235, 0.87);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary:not(.md-checked) .md-icon,
md-checkbox.md-hue-3:not([disabled]).md-primary:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-icon,
md-checkbox.md-hue-3:not([disabled]).md-primary.md-checked .md-icon {
  background-color: rgba(165, 0, 37, 0.87);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-3:not([disabled]).md-primary.md-checked.md-focused .md-container::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-icon::after,
md-checkbox.md-hue-3:not([disabled]).md-primary.md-checked .md-icon::after {
  border-color: rgba(0, 0, 0, 0.87);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-primary .md-indeterminate[disabled] .md-container,
md-checkbox.md-hue-3:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

md-checkbox.md-default-theme.md-hue-3[disabled]:not(.md-checked) .md-icon,
md-checkbox.md-hue-3[disabled]:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-3[disabled] .md-icon::after,
md-checkbox.md-hue-3[disabled] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-3[disabled] .md-label,
md-checkbox.md-hue-3[disabled] .md-label {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-3 .md-chips,
md-chips.md-hue-3 .md-chips {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px;
}

md-chips.md-default-theme.md-hue-3 .md-chips.md-focused,
md-chips.md-hue-3 .md-chips.md-focused {
  box-shadow: rgb(165, 0, 37) 0px 2px;
}

md-chips.md-default-theme.md-hue-3 .md-chips .md-chip-input-container input,
md-chips.md-hue-3 .md-chips .md-chip-input-container input {
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-3 .md-chips .md-chip-input-container input::-webkit-input-placeholder,
md-chips.md-hue-3 .md-chips .md-chip-input-container input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-chips.md-default-theme.md-hue-3 md-chip.md-focused,
md-chips.md-hue-3 md-chip.md-focused {
  background-image: initial;
  background-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

md-chips.md-default-theme.md-hue-3 md-chip.md-focused md-icon,
md-chips.md-hue-3 md-chip.md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-3 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator,
.md-hue-3 .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {
  border-color: rgb(0, 150, 136);
}

.md-default-theme.md-hue-3 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled,
.md-hue-3 .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {
  color: rgba(255, 105, 119, 0.6);
}

.md-default-theme.md-hue-3 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-3 .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-3 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator,
.md-hue-3 .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {
  background-image: initial;
  background-color: rgb(0, 150, 136);
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

.md-default-theme.md-hue-3 .md-calendar-date-disabled,
.md-hue-3 .md-calendar-date-disabled,
.md-default-theme.md-hue-3 .md-calendar-month-label-disabled,
.md-hue-3 .md-calendar-month-label-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-3 .md-datepicker-input,
.md-hue-3 .md-datepicker-input {
  color: rgba(255, 255, 255, 0.87);
}

.md-default-theme.md-hue-3 .md-datepicker-input::-webkit-input-placeholder,
.md-hue-3 .md-datepicker-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.md-default-theme.md-hue-3 .md-datepicker-input-container,
.md-hue-3 .md-datepicker-input-container {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.md-default-theme.md-hue-3 .md-datepicker-input-container.md-datepicker-focused,
.md-hue-3 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(165, 0, 37);
}

.md-default-theme.md-hue-3 .md-datepicker-triangle-button .md-datepicker-expand-triangle,
.md-hue-3 .md-datepicker-triangle-button .md-datepicker-expand-triangle {
  border-top-color: rgba(0, 0, 0, 0.54);
}

.md-default-theme.md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon,
.md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(167, 255, 235);
}

md-dialog.md-default-theme.md-hue-3.md-content-overflow .md-actions,
md-dialog.md-hue-3.md-content-overflow .md-actions,
md-dialog.md-default-theme.md-hue-3.md-content-overflow md-dialog-actions,
md-dialog.md-hue-3.md-content-overflow md-dialog-actions,
md-divider.md-default-theme.md-hue-3,
md-divider.md-hue-3 {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.layout-gt-lg-row>md-divider.md-default-theme.md-hue-3,
.layout-gt-lg-row>md-divider.md-hue-3,
.layout-gt-md-row>md-divider.md-default-theme.md-hue-3,
.layout-gt-md-row>md-divider.md-hue-3,
.layout-gt-sm-row>md-divider.md-default-theme.md-hue-3,
.layout-gt-sm-row>md-divider.md-hue-3,
.layout-gt-xs-row>md-divider.md-default-theme.md-hue-3,
.layout-gt-xs-row>md-divider.md-hue-3,
.layout-lg-row>md-divider.md-default-theme.md-hue-3,
.layout-lg-row>md-divider.md-hue-3,
.layout-md-row>md-divider.md-default-theme.md-hue-3,
.layout-md-row>md-divider.md-hue-3,
.layout-row>md-divider.md-default-theme.md-hue-3,
.layout-row>md-divider.md-hue-3,
.layout-sm-row>md-divider.md-default-theme.md-hue-3,
.layout-sm-row>md-divider.md-hue-3,
.layout-xl-row>md-divider.md-default-theme.md-hue-3,
.layout-xl-row>md-divider.md-hue-3,
.layout-xs-row>md-divider.md-default-theme.md-hue-3,
.layout-xs-row>md-divider.md-hue-3 {
  border-right-color: rgba(0, 0, 0, 0.12);
}

md-icon.md-default-theme.md-hue-3,
md-icon.md-hue-3 {
  color: rgba(255, 255, 255, 0.54);
}

md-icon.md-default-theme.md-hue-3.md-primary,
md-icon.md-hue-3.md-primary {
  color: rgb(167, 255, 235);
}

md-input-container.md-default-theme.md-hue-3 .md-input,
md-input-container.md-hue-3 .md-input {
  color: rgba(255, 255, 255, 0.87);
  border-color: rgba(0, 0, 0, 0.12);
}

md-input-container.md-default-theme.md-hue-3 .md-input::-webkit-input-placeholder,
md-input-container.md-hue-3 .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-3>md-icon,
md-input-container.md-hue-3>md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-3 .md-placeholder,
md-input-container.md-hue-3 .md-placeholder,
md-input-container.md-default-theme.md-hue-3 label,
md-input-container.md-hue-3 label {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-focused):not(.md-input-invalid) label.md-required::after,
md-input-container.md-hue-3:not(.md-input-focused):not(.md-input-invalid) label.md-required::after {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-3 .md-input-message-animation .md-char-counter,
md-input-container.md-hue-3 .md-input-message-animation .md-char-counter,
md-input-container.md-default-theme.md-hue-3 .md-input-messages-animation .md-char-counter,
md-input-container.md-hue-3 .md-input-messages-animation .md-char-counter {
  color: rgba(255, 255, 255, 0.87);
}

md-input-container.md-default-theme.md-hue-3.md-input-focused .md-input::-webkit-input-placeholder,
md-input-container.md-hue-3.md-input-focused .md-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-has-value label,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-has-value label {
  color: rgba(255, 255, 255, 0.54);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused .md-input,
md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-resized .md-input,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-resized .md-input {
  border-color: rgb(165, 0, 37);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused label,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused label,
md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused md-icon,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused md-icon {
  color: rgb(167, 255, 235);
}

md-list.md-default-theme.md-hue-3 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-hue-3 md-list-item.md-2-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-3 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-hue-3 md-list-item.md-2-line .md-list-item-text h4,
md-list.md-default-theme.md-hue-3 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-hue-3 md-list-item.md-3-line .md-list-item-text h3,
md-list.md-default-theme.md-hue-3 md-list-item.md-3-line .md-list-item-text h4,
md-list.md-hue-3 md-list-item.md-3-line .md-list-item-text h4 {
  color: rgba(255, 255, 255, 0.87);
}

md-list.md-default-theme.md-hue-3 md-list-item.md-2-line .md-list-item-text p,
md-list.md-hue-3 md-list-item.md-2-line .md-list-item-text p,
md-list.md-default-theme.md-hue-3 md-list-item.md-3-line .md-list-item-text p,
md-list.md-hue-3 md-list-item.md-3-line .md-list-item-text p {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-3 md-list-item>md-icon,
md-list.md-hue-3 md-list-item>md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-list.md-default-theme.md-hue-3 md-list-item>md-icon.md-highlight,
md-list.md-hue-3 md-list-item>md-icon.md-highlight {
  color: rgb(167, 255, 235);
}

md-menu-content.md-default-theme.md-hue-3 md-menu-item,
md-menu-content.md-hue-3 md-menu-item {
  color: rgba(255, 255, 255, 0.87);
}

md-menu-content.md-default-theme.md-hue-3 md-menu-item md-icon,
md-menu-content.md-hue-3 md-menu-item md-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-3 md-menu-item .md-button[disabled],
md-menu-content.md-hue-3 md-menu-item .md-button[disabled],
md-menu-content.md-default-theme.md-hue-3 md-menu-item .md-button[disabled] md-icon,
md-menu-content.md-hue-3 md-menu-item .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-menu-bar.md-default-theme.md-hue-3>button.md-button,
md-menu-bar.md-hue-3>button.md-button {
  color: rgba(255, 255, 255, 0.54);
}

md-toolbar.md-default-theme.md-hue-3.md-menu-toolbar md-toolbar-filler,
md-toolbar.md-hue-3.md-menu-toolbar md-toolbar-filler {
  background-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-3 .md-button._md-nav-button.md-unselected,
md-nav-bar.md-hue-3 .md-button._md-nav-button.md-unselected {
  color: rgba(255, 255, 255, 0.54);
}

md-nav-bar.md-default-theme.md-hue-3.md-primary>.md-nav-bar,
md-nav-bar.md-hue-3.md-primary>.md-nav-bar {
  background-color: rgb(165, 0, 37);
}

md-nav-bar.md-default-theme.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-nav-bar.md-default-theme.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar,
md-toolbar>md-nav-bar.md-hue-3>.md-nav-bar {
  background-color: rgb(165, 0, 37);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button,
md-toolbar>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button {
  color: rgb(178, 223, 219);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-progress-linear.md-default-theme.md-hue-3 .md-container,
md-progress-linear.md-hue-3 .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-3 .md-bar,
md-progress-linear.md-hue-3 .md-bar {
  background-color: rgb(165, 0, 37);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-primary .md-bar1,
md-progress-linear.md-hue-3[md-mode="buffer"].md-primary .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-primary .md-dashed::before,
md-progress-linear.md-hue-3[md-mode="buffer"].md-primary .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-3 .md-off,
md-radio-button.md-hue-3 .md-off {
  border-color: rgba(0, 0, 0, 0.54);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary .md-on,
md-radio-button.md-hue-3:not([disabled]).md-primary .md-on,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-on,
md-radio-button.md-hue-3:not([disabled]) .md-primary .md-on,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary .md-on,
md-radio-group.md-hue-3:not([disabled]).md-primary .md-on,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-on,
md-radio-group.md-hue-3:not([disabled]) .md-primary .md-on {
  background-color: rgba(165, 0, 37, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]).md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]) .md-primary.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]).md-primary .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]).md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]) .md-primary.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]).md-primary .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]) .md-primary .md-checked .md-off {
  border-color: rgba(165, 0, 37, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]).md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-primary.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]).md-primary .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-primary .md-checked .md-ink-ripple {
  color: rgba(167, 255, 235, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-hue-3:not([disabled]).md-primary .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-hue-3:not([disabled]).md-primary .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-primary .md-container .md-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-primary .md-container .md-ripple {
  color: rgb(255, 118, 132);
}

md-radio-button.md-default-theme.md-hue-3[disabled],
md-radio-button.md-hue-3[disabled],
md-radio-group.md-default-theme.md-hue-3[disabled],
md-radio-group.md-hue-3[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

md-radio-button.md-default-theme.md-hue-3[disabled] .md-container .md-off,
md-radio-button.md-hue-3[disabled] .md-container .md-off,
md-radio-button.md-default-theme.md-hue-3[disabled] .md-container .md-on,
md-radio-button.md-hue-3[disabled] .md-container .md-on,
md-radio-group.md-default-theme.md-hue-3[disabled] .md-container .md-off,
md-radio-group.md-hue-3[disabled] .md-container .md-off,
md-radio-group.md-default-theme.md-hue-3[disabled] .md-container .md-on,
md-radio-group.md-hue-3[disabled] .md-container .md-on {
  border-color: rgba(0, 0, 0, 0.38);
}

md-radio-group.md-default-theme.md-hue-3 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-hue-3 .md-checked:not([disabled]).md-primary .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3.md-primary .md-checked:not([disabled]) .md-ink-ripple,
md-radio-group.md-hue-3.md-primary .md-checked:not([disabled]) .md-ink-ripple {
  color: rgba(167, 255, 235, 0.26);
}

md-radio-group.md-default-theme.md-hue-3.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-hue-3.md-focused:not(:empty) .md-checked.md-primary .md-container::before,
md-radio-group.md-default-theme.md-hue-3.md-focused:not(:empty).md-primary .md-checked .md-container::before,
md-radio-group.md-hue-3.md-focused:not(:empty).md-primary .md-checked .md-container::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-default-theme.md-hue-3 .md-select-value span:first-child::after,
md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-hue-3 .md-select-value span:first-child::after {
  color: rgba(255, 255, 255, 0.38);
}

md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-3 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-3 .md-select-value,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme.md-hue-3 .md-select-value.md-select-placeholder,
md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-hue-3 .md-select-value.md-select-placeholder {
  color: rgb(167, 255, 235);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-3.md-no-underline .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-3.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-3 .md-select-value,
md-select.md-hue-3 .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

md-select.md-default-theme.md-hue-3 .md-select-value.md-select-placeholder,
md-select.md-hue-3 .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-3.md-no-underline .md-select-value,
md-select.md-hue-3.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-3.ng-invalid.ng-touched.md-no-underline .md-select-value,
md-select.md-hue-3.ng-invalid.ng-touched.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-3:not([disabled]):focus .md-select-value,
md-select.md-hue-3:not([disabled]):focus .md-select-value {
  border-bottom-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-3:not([disabled]):focus .md-select-value.md-select-placeholder,
md-select.md-hue-3:not([disabled]):focus .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.87);
}

md-select.md-default-theme.md-hue-3:not([disabled]):focus.md-no-underline .md-select-value,
md-select.md-hue-3:not([disabled]):focus.md-no-underline .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-select.md-default-theme.md-hue-3[disabled] .md-select-icon,
md-select.md-hue-3[disabled] .md-select-icon,
md-select.md-default-theme.md-hue-3[disabled] .md-select-value,
md-select.md-hue-3[disabled] .md-select-value,
md-select.md-default-theme.md-hue-3[disabled] .md-select-value.md-select-placeholder,
md-select.md-hue-3[disabled] .md-select-value.md-select-placeholder {
  color: rgba(255, 255, 255, 0.38);
}

md-select.md-default-theme.md-hue-3 .md-select-icon,
md-select.md-hue-3 .md-select-icon {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-optgroup,
md-select-menu.md-hue-3 md-content md-optgroup {
  color: rgba(255, 255, 255, 0.54);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option,
md-select-menu.md-hue-3 md-content md-option {
  color: rgba(255, 255, 255, 0.87);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option[disabled] .md-text,
md-select-menu.md-hue-3 md-content md-option[disabled] .md-text {
  color: rgba(255, 255, 255, 0.38);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option[selected],
md-select-menu.md-hue-3 md-content md-option[selected] {
  color: rgb(255, 105, 119);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option[selected]:focus,
md-select-menu.md-hue-3 md-content md-option[selected]:focus {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-3 .md-ripple,
.md-checkbox-enabled.md-hue-3 .md-ripple {
  color: rgb(255, 118, 132);
}

.md-checkbox-enabled.md-default-theme.md-hue-3 .md-ink-ripple,
.md-checkbox-enabled.md-hue-3 .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-3[selected] .md-ink-ripple,
.md-checkbox-enabled.md-hue-3[selected] .md-ink-ripple {
  color: rgba(167, 255, 235, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-3:not(.md-checked) .md-icon,
.md-checkbox-enabled.md-hue-3:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

.md-checkbox-enabled.md-default-theme.md-hue-3[selected] .md-icon,
.md-checkbox-enabled.md-hue-3[selected] .md-icon {
  background-color: rgba(165, 0, 37, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-3[selected].md-focused .md-container::before,
.md-checkbox-enabled.md-hue-3[selected].md-focused .md-container::before {
  background-color: rgba(165, 0, 37, 0.26);
}

.md-checkbox-enabled.md-default-theme.md-hue-3[selected] .md-icon::after,
.md-checkbox-enabled.md-hue-3[selected] .md-icon::after {
  border-color: rgba(0, 0, 0, 0.87);
}

.md-checkbox-enabled.md-default-theme.md-hue-3 .md-indeterminate[disabled] .md-container,
.md-checkbox-enabled.md-hue-3 .md-indeterminate[disabled] .md-container {
  color: rgba(255, 255, 255, 0.38);
}

.md-checkbox-enabled.md-default-theme.md-hue-3 md-option .md-text,
.md-checkbox-enabled.md-hue-3 md-option .md-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-focus-ring,
md-slider.md-hue-3.md-primary .md-focus-ring {
  background-color: rgba(181, 74, 84, 0.38);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-track.md-track-fill,
md-slider.md-hue-3.md-primary .md-track.md-track-fill {
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-thumb::after,
md-slider.md-hue-3.md-primary .md-thumb::after {
  border-color: rgb(165, 0, 37);
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-sign,
md-slider.md-hue-3.md-primary .md-sign {
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-sign::after,
md-slider.md-hue-3.md-primary .md-sign::after {
  border-top-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-3.md-primary[md-vertical] .md-sign::after,
md-slider.md-hue-3.md-primary[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-3.md-primary .md-thumb-text,
md-slider.md-hue-3.md-primary .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-3[disabled] .md-thumb::after,
md-slider.md-hue-3[disabled] .md-thumb::after {
  border-color: rgba(0, 0, 0, 0);
}

md-slider-container[disabled]> :first-child:not(md-slider),
md-slider-container[disabled]> :last-child:not(md-slider) {
  color: rgba(255, 255, 255, 0.38);
}

.md-subheader.md-default-theme.md-hue-3.md-primary,
.md-subheader.md-hue-3.md-primary {
  color: rgb(167, 255, 235);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-primary .md-ink-ripple,
md-switch.md-hue-3.md-checked.md-primary .md-ink-ripple {
  color: rgb(167, 255, 235);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-primary .md-thumb,
md-switch.md-hue-3.md-checked.md-primary .md-thumb {
  background-color: rgb(165, 0, 37);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-primary .md-bar,
md-switch.md-hue-3.md-checked.md-primary .md-bar {
  background-color: rgba(165, 0, 37, 0.5);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-primary.md-focused .md-thumb::before,
md-switch.md-hue-3.md-checked.md-primary.md-focused .md-thumb::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-tabs.md-default-theme.md-hue-3 .md-paginator md-icon,
md-tabs.md-hue-3 .md-paginator md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-3 .md-tab,
md-tabs.md-hue-3 .md-tab {
  color: rgba(255, 255, 255, 0.54);
}

md-tabs.md-default-theme.md-hue-3 .md-tab[disabled],
md-tabs.md-hue-3 .md-tab[disabled],
md-tabs.md-default-theme.md-hue-3 .md-tab[disabled] md-icon,
md-tabs.md-hue-3 .md-tab[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-tabs.md-default-theme.md-hue-3 .md-tab.md-active,
md-tabs.md-hue-3 .md-tab.md-active,
md-tabs.md-default-theme.md-hue-3 .md-tab.md-active md-icon,
md-tabs.md-hue-3 .md-tab.md-active md-icon,
md-tabs.md-default-theme.md-hue-3 .md-tab.md-focused,
md-tabs.md-hue-3 .md-tab.md-focused,
md-tabs.md-default-theme.md-hue-3 .md-tab.md-focused md-icon,
md-tabs.md-hue-3 .md-tab.md-focused md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-3 .md-tab.md-focused,
md-tabs.md-hue-3 .md-tab.md-focused {
  background-image: initial;
  background-color: rgba(165, 0, 37, 0.1);
}

md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper {
  background-color: rgb(165, 0, 37);
}

md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper {
  background-color: rgb(165, 0, 37);
}

md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(178, 223, 219);
}

md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toast.md-default-theme.md-hue-3 .md-toast-content .md-button.md-highlight.md-primary,
md-toast.md-hue-3 .md-toast-content .md-button.md-highlight.md-primary {
  color: rgb(167, 255, 235);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar),
md-toolbar.md-hue-3:not(.md-menu-toolbar) {
  background-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar) md-icon,
md-toolbar.md-hue-3:not(.md-menu-toolbar) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar) .md-button[disabled] md-icon,
md-toolbar.md-hue-3:not(.md-menu-toolbar) .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

.md-button.md-default-theme.md-fab md-icon,
.md-button.md-fab md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-fab,
.md-button.md-fab {
  background-color: rgb(232, 0, 55);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-fab:not([disabled]) .md-icon,
.md-button.md-fab:not([disabled]) .md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-fab:not([disabled]).md-focused,
.md-button.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-fab:not([disabled]):hover,
.md-button.md-fab:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-accent,
.md-button.md-accent {
  color: rgb(100, 255, 218);
}

.md-button.md-default-theme.md-accent.md-fab,
.md-button.md-accent.md-fab,
.md-button.md-default-theme.md-accent.md-raised,
.md-button.md-accent.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(232, 0, 55);
}

.md-button.md-default-theme.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-accent.md-raised:not([disabled]) md-icon,
.md-button.md-accent.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-accent.md-fab:not([disabled]):hover,
.md-button.md-accent.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-accent.md-raised:not([disabled]):hover,
.md-button.md-accent.md-raised:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-accent:not([disabled]) md-icon,
.md-button.md-accent:not([disabled]) md-icon {
  color: rgb(100, 255, 218);
}

.md-button.md-default-theme.md-accent[disabled],
.md-button.md-accent[disabled],
.md-button.md-default-theme.md-fab[disabled],
.md-button.md-fab[disabled],
.md-button.md-default-theme.md-raised[disabled],
.md-button.md-raised[disabled],
.md-button.md-default-theme.md-warn[disabled],
.md-button.md-warn[disabled],
.md-button.md-default-theme[disabled],
.md-button[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.md-button.md-default-theme.md-accent[disabled] md-icon,
.md-button.md-accent[disabled] md-icon,
.md-button.md-default-theme.md-fab[disabled] md-icon,
.md-button.md-fab[disabled] md-icon,
.md-button.md-default-theme.md-raised[disabled] md-icon,
.md-button.md-raised[disabled] md-icon,
.md-button.md-default-theme.md-warn[disabled] md-icon,
.md-button.md-warn[disabled] md-icon,
.md-button.md-default-theme[disabled] md-icon,
.md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

._md a.md-default-theme:not(.md-button).md-accent,
._md a:not(.md-button).md-accent {
  color: rgb(100, 255, 218);
}

._md a.md-default-theme:not(.md-button).md-accent:hover,
._md a:not(.md-button).md-accent:hover {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme .md-ripple,
md-checkbox .md-ripple {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-checked.md-focused .md-container::before,
md-checkbox.md-checked.md-focused .md-container::before {
  background-color: rgba(232, 0, 55, 0.26);
}

md-checkbox.md-default-theme.md-checked .md-ink-ripple,
md-checkbox.md-checked .md-ink-ripple {
  color: rgba(100, 255, 218, 0.87);
}

md-checkbox.md-default-theme.md-checked .md-icon,
md-checkbox.md-checked .md-icon {
  background-color: rgba(232, 0, 55, 0.87);
}

md-checkbox.md-default-theme.md-checked .md-icon::after,
md-checkbox.md-checked .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

.md-accent .md-default-theme .md-datepicker-input-container.md-datepicker-focused,
.md-accent .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(232, 0, 55);
}

.md-accent .md-default-theme .md-datepicker-open .md-datepicker-calendar-icon,
.md-accent .md-datepicker-open .md-datepicker-calendar-icon,
.md-default-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon,
.md-datepicker-open.md-accent .md-datepicker-calendar-icon {
  color: rgb(100, 255, 218);
}

md-icon.md-default-theme.md-accent,
md-icon.md-accent {
  color: rgb(100, 255, 218);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent .md-input {
  border-color: rgb(232, 0, 55);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent md-icon {
  color: rgb(100, 255, 218);
}

md-list.md-default-theme md-list-item>md-icon.md-highlight.md-accent,
md-list md-list-item>md-icon.md-highlight.md-accent {
  color: rgb(100, 255, 218);
}

md-nav-bar.md-default-theme md-nav-ink-bar,
md-nav-bar md-nav-ink-bar {
  color: rgb(100, 255, 218);
  background-image: initial;
  background-color: rgb(232, 0, 55);
}

md-nav-bar.md-default-theme.md-accent>.md-nav-bar,
md-nav-bar.md-accent>.md-nav-bar {
  background-color: rgb(232, 0, 55);
}

md-nav-bar.md-default-theme.md-accent>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-accent>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-nav-bar.md-default-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-nav-bar.md-default-theme.md-accent>.md-nav-bar md-nav-ink-bar,
md-nav-bar.md-accent>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar {
  background-color: rgb(232, 0, 55);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme>.md-nav-bar md-nav-ink-bar,
md-toolbar.md-accent>md-nav-bar>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-progress-linear.md-default-theme.md-accent .md-container,
md-progress-linear.md-accent .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-accent .md-bar,
md-progress-linear.md-accent .md-bar {
  background-color: rgb(232, 0, 55);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-accent .md-bar1,
md-progress-linear[md-mode="buffer"].md-accent .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-accent .md-dashed::before,
md-progress-linear[md-mode="buffer"].md-accent .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme .md-on,
md-radio-button .md-on {
  background-color: rgba(232, 0, 55, 0.87);
}

md-radio-button.md-default-theme.md-checked .md-off,
md-radio-button.md-checked .md-off {
  border-color: rgba(232, 0, 55, 0.87);
}

md-radio-button.md-default-theme.md-checked .md-ink-ripple,
md-radio-button.md-checked .md-ink-ripple {
  color: rgba(100, 255, 218, 0.87);
}

md-radio-button.md-default-theme .md-container .md-ripple,
md-radio-button .md-container .md-ripple {
  color: rgb(0, 191, 165);
}

md-radio-group.md-default-theme .md-checked .md-ink-ripple,
md-radio-group .md-checked .md-ink-ripple {
  color: rgba(100, 255, 218, 0.26);
}

md-radio-group.md-default-theme.md-focused:not(:empty) .md-checked .md-container::before,
md-radio-group.md-focused:not(:empty) .md-checked .md-container::before {
  background-color: rgba(232, 0, 55, 0.26);
}

md-select.md-default-theme:not([disabled]):focus.md-accent .md-select-value,
md-select:not([disabled]):focus.md-accent .md-select-value {
  border-bottom-color: rgb(232, 0, 55);
}

md-select-menu.md-default-theme md-content md-option[selected].md-accent,
md-select-menu md-content md-option[selected].md-accent {
  color: rgb(100, 255, 218);
}

md-select-menu.md-default-theme md-content md-option[selected].md-accent:focus,
md-select-menu md-content md-option[selected].md-accent:focus {
  color: rgb(0, 191, 165);
}

md-slider.md-default-theme .md-focus-ring,
md-slider .md-focus-ring {
  background-color: rgba(232, 0, 55, 0.2);
}

md-slider.md-default-theme .md-track.md-track-fill,
md-slider .md-track.md-track-fill {
  background-color: rgb(232, 0, 55);
}

md-slider.md-default-theme .md-thumb::after,
md-slider .md-thumb::after {
  border-color: rgb(232, 0, 55);
  background-color: rgb(232, 0, 55);
}

md-slider.md-default-theme .md-sign,
md-slider .md-sign {
  background-color: rgb(232, 0, 55);
}

md-slider.md-default-theme .md-sign::after,
md-slider .md-sign::after {
  border-top-color: rgb(232, 0, 55);
}

md-slider.md-default-theme[md-vertical] .md-sign::after,
md-slider[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(232, 0, 55);
}

md-slider.md-default-theme .md-thumb-text,
md-slider .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-accent,
.md-subheader.md-accent {
  color: rgb(100, 255, 218);
}

md-switch.md-default-theme.md-checked .md-ink-ripple,
md-switch.md-checked .md-ink-ripple {
  color: rgb(100, 255, 218);
}

md-switch.md-default-theme.md-checked .md-thumb,
md-switch.md-checked .md-thumb {
  background-color: rgb(232, 0, 55);
}

md-switch.md-default-theme.md-checked .md-bar,
md-switch.md-checked .md-bar {
  background-color: rgba(232, 0, 55, 0.5);
}

md-switch.md-default-theme.md-checked.md-focused .md-thumb::before,
md-switch.md-checked.md-focused .md-thumb::before {
  background-color: rgba(232, 0, 55, 0.26);
}

md-tabs.md-default-theme md-ink-bar,
md-tabs md-ink-bar {
  color: rgb(100, 255, 218);
  background-image: initial;
  background-color: rgb(232, 0, 55);
}

md-tabs.md-default-theme .md-tab .md-ripple-container,
md-tabs .md-tab .md-ripple-container {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-accent>md-tabs-wrapper,
md-tabs.md-accent>md-tabs-wrapper {
  background-color: rgb(232, 0, 55);
}

md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-tabs.md-default-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-tabs.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper {
  background-color: rgb(232, 0, 55);
}

md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-toolbar.md-accent>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toast.md-default-theme .md-toast-content .md-button.md-highlight,
md-toast .md-toast-content .md-button.md-highlight {
  color: rgb(100, 255, 218);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar).md-accent,
md-toolbar:not(.md-menu-toolbar).md-accent {
  background-color: rgb(232, 0, 55);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple,
md-toolbar:not(.md-menu-toolbar).md-accent .md-ink-ripple {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar).md-accent md-icon,
md-toolbar:not(.md-menu-toolbar).md-accent md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon,
md-toolbar:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

.md-button.md-default-theme.md-hue-1.md-fab md-icon,
.md-button.md-hue-1.md-fab md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-fab,
.md-button.md-hue-1.md-fab {
  background-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-fab:not([disabled]) .md-icon,
.md-button.md-hue-1.md-fab:not([disabled]) .md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-fab:not([disabled]).md-focused,
.md-button.md-hue-1.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-fab:not([disabled]):hover,
.md-button.md-hue-1.md-fab:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-1.md-accent,
.md-button.md-hue-1.md-accent {
  color: rgb(167, 255, 235);
}

.md-button.md-default-theme.md-hue-1.md-accent.md-fab,
.md-button.md-hue-1.md-accent.md-fab,
.md-button.md-default-theme.md-hue-1.md-accent.md-raised,
.md-button.md-hue-1.md-accent.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(165, 0, 37);
}

.md-button.md-default-theme.md-hue-1.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-hue-1.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-1.md-accent.md-raised:not([disabled]) md-icon,
.md-button.md-hue-1.md-accent.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-hue-1.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-accent.md-fab:not([disabled]):hover,
.md-button.md-hue-1.md-accent.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-1.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-hue-1.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-accent.md-raised:not([disabled]):hover,
.md-button.md-hue-1.md-accent.md-raised:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-1.md-accent:not([disabled]) md-icon,
.md-button.md-hue-1.md-accent:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

.md-button.md-default-theme.md-hue-1.md-accent[disabled],
.md-button.md-hue-1.md-accent[disabled],
.md-button.md-default-theme.md-hue-1.md-fab[disabled],
.md-button.md-hue-1.md-fab[disabled],
.md-button.md-default-theme.md-hue-1.md-raised[disabled],
.md-button.md-hue-1.md-raised[disabled],
.md-button.md-default-theme.md-hue-1.md-warn[disabled],
.md-button.md-hue-1.md-warn[disabled],
.md-button.md-default-theme.md-hue-1[disabled],
.md-button.md-hue-1[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.md-button.md-default-theme.md-hue-1.md-accent[disabled] md-icon,
.md-button.md-hue-1.md-accent[disabled] md-icon,
.md-button.md-default-theme.md-hue-1.md-fab[disabled] md-icon,
.md-button.md-hue-1.md-fab[disabled] md-icon,
.md-button.md-default-theme.md-hue-1.md-raised[disabled] md-icon,
.md-button.md-hue-1.md-raised[disabled] md-icon,
.md-button.md-default-theme.md-hue-1.md-warn[disabled] md-icon,
.md-button.md-hue-1.md-warn[disabled] md-icon,
.md-button.md-default-theme.md-hue-1[disabled] md-icon,
.md-button.md-hue-1[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-accent,
._md a.md-hue-1:not(.md-button).md-accent {
  color: rgb(167, 255, 235);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-accent:hover,
._md a.md-hue-1:not(.md-button).md-accent:hover {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-1 .md-ripple,
md-checkbox.md-hue-1 .md-ripple {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-1.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-1.md-checked.md-focused .md-container::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-checkbox.md-default-theme.md-hue-1.md-checked .md-ink-ripple,
md-checkbox.md-hue-1.md-checked .md-ink-ripple {
  color: rgba(167, 255, 235, 0.87);
}

md-checkbox.md-default-theme.md-hue-1.md-checked .md-icon,
md-checkbox.md-hue-1.md-checked .md-icon {
  background-color: rgba(165, 0, 37, 0.87);
}

md-checkbox.md-default-theme.md-hue-1.md-checked .md-icon::after,
md-checkbox.md-hue-1.md-checked .md-icon::after {
  border-color: rgba(0, 0, 0, 0.87);
}

.md-accent .md-default-theme.md-hue-1 .md-datepicker-input-container.md-datepicker-focused,
.md-accent .md-hue-1 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(165, 0, 37);
}

.md-accent .md-default-theme.md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon,
.md-accent .md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon,
.md-default-theme.md-hue-1 .md-datepicker-open.md-accent .md-datepicker-calendar-icon,
.md-hue-1 .md-datepicker-open.md-accent .md-datepicker-calendar-icon {
  color: rgb(167, 255, 235);
}

md-icon.md-default-theme.md-hue-1.md-accent,
md-icon.md-hue-1.md-accent {
  color: rgb(167, 255, 235);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent .md-input,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent .md-input {
  border-color: rgb(165, 0, 37);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent md-icon,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-accent md-icon {
  color: rgb(167, 255, 235);
}

md-list.md-default-theme.md-hue-1 md-list-item>md-icon.md-highlight.md-accent,
md-list.md-hue-1 md-list-item>md-icon.md-highlight.md-accent {
  color: rgb(167, 255, 235);
}

md-nav-bar.md-default-theme.md-hue-1 md-nav-ink-bar,
md-nav-bar.md-hue-1 md-nav-ink-bar {
  color: rgb(167, 255, 235);
  background-image: initial;
  background-color: rgb(165, 0, 37);
}

md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar {
  background-color: rgb(165, 0, 37);
}

md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-nav-bar.md-default-theme.md-hue-1.md-accent>.md-nav-bar md-nav-ink-bar,
md-nav-bar.md-hue-1.md-accent>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar {
  background-color: rgb(165, 0, 37);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar md-nav-ink-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-1>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-progress-linear.md-default-theme.md-hue-1.md-accent .md-container,
md-progress-linear.md-hue-1.md-accent .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-1.md-accent .md-bar,
md-progress-linear.md-hue-1.md-accent .md-bar {
  background-color: rgb(165, 0, 37);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-accent .md-bar1,
md-progress-linear.md-hue-1[md-mode="buffer"].md-accent .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-accent .md-dashed::before,
md-progress-linear.md-hue-1[md-mode="buffer"].md-accent .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-1 .md-on,
md-radio-button.md-hue-1 .md-on {
  background-color: rgba(165, 0, 37, 0.87);
}

md-radio-button.md-default-theme.md-hue-1.md-checked .md-off,
md-radio-button.md-hue-1.md-checked .md-off {
  border-color: rgba(165, 0, 37, 0.87);
}

md-radio-button.md-default-theme.md-hue-1.md-checked .md-ink-ripple,
md-radio-button.md-hue-1.md-checked .md-ink-ripple {
  color: rgba(167, 255, 235, 0.87);
}

md-radio-button.md-default-theme.md-hue-1 .md-container .md-ripple,
md-radio-button.md-hue-1 .md-container .md-ripple {
  color: rgb(0, 191, 165);
}

md-radio-group.md-default-theme.md-hue-1 .md-checked .md-ink-ripple,
md-radio-group.md-hue-1 .md-checked .md-ink-ripple {
  color: rgba(167, 255, 235, 0.26);
}

md-radio-group.md-default-theme.md-hue-1.md-focused:not(:empty) .md-checked .md-container::before,
md-radio-group.md-hue-1.md-focused:not(:empty) .md-checked .md-container::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-select.md-default-theme.md-hue-1:not([disabled]):focus.md-accent .md-select-value,
md-select.md-hue-1:not([disabled]):focus.md-accent .md-select-value {
  border-bottom-color: rgb(165, 0, 37);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option[selected].md-accent,
md-select-menu.md-hue-1 md-content md-option[selected].md-accent {
  color: rgb(167, 255, 235);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option[selected].md-accent:focus,
md-select-menu.md-hue-1 md-content md-option[selected].md-accent:focus {
  color: rgb(0, 191, 165);
}

md-slider.md-default-theme.md-hue-1 .md-focus-ring,
md-slider.md-hue-1 .md-focus-ring {
  background-color: rgba(232, 0, 55, 0.2);
}

md-slider.md-default-theme.md-hue-1 .md-track.md-track-fill,
md-slider.md-hue-1 .md-track.md-track-fill {
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-1 .md-thumb::after,
md-slider.md-hue-1 .md-thumb::after {
  border-color: rgb(165, 0, 37);
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-1 .md-sign,
md-slider.md-hue-1 .md-sign {
  background-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-1 .md-sign::after,
md-slider.md-hue-1 .md-sign::after {
  border-top-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-1[md-vertical] .md-sign::after,
md-slider.md-hue-1[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(165, 0, 37);
}

md-slider.md-default-theme.md-hue-1 .md-thumb-text,
md-slider.md-hue-1 .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-hue-1.md-accent,
.md-subheader.md-hue-1.md-accent {
  color: rgb(167, 255, 235);
}

md-switch.md-default-theme.md-hue-1.md-checked .md-ink-ripple,
md-switch.md-hue-1.md-checked .md-ink-ripple {
  color: rgb(167, 255, 235);
}

md-switch.md-default-theme.md-hue-1.md-checked .md-thumb,
md-switch.md-hue-1.md-checked .md-thumb {
  background-color: rgb(165, 0, 37);
}

md-switch.md-default-theme.md-hue-1.md-checked .md-bar,
md-switch.md-hue-1.md-checked .md-bar {
  background-color: rgba(165, 0, 37, 0.5);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-focused .md-thumb::before,
md-switch.md-hue-1.md-checked.md-focused .md-thumb::before {
  background-color: rgba(165, 0, 37, 0.26);
}

md-tabs.md-default-theme.md-hue-1 md-ink-bar,
md-tabs.md-hue-1 md-ink-bar {
  color: rgb(167, 255, 235);
  background-image: initial;
  background-color: rgb(165, 0, 37);
}

md-tabs.md-default-theme.md-hue-1 .md-tab .md-ripple-container,
md-tabs.md-hue-1 .md-tab .md-ripple-container {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper {
  background-color: rgb(165, 0, 37);
}

md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-tabs.md-default-theme.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-tabs.md-hue-1.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper {
  background-color: rgb(165, 0, 37);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-toolbar.md-accent>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toast.md-default-theme.md-hue-1 .md-toast-content .md-button.md-highlight,
md-toast.md-hue-1 .md-toast-content .md-button.md-highlight {
  color: rgb(167, 255, 235);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-accent,
md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent {
  background-color: rgb(165, 0, 37);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-accent .md-ink-ripple,
md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent .md-ink-ripple {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-accent md-icon,
md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon,
md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

.md-button.md-default-theme.md-hue-2.md-fab md-icon,
.md-button.md-hue-2.md-fab md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-fab,
.md-button.md-hue-2.md-fab {
  background-color: rgb(239, 86, 124);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-fab:not([disabled]) .md-icon,
.md-button.md-hue-2.md-fab:not([disabled]) .md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-fab:not([disabled]).md-focused,
.md-button.md-hue-2.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-fab:not([disabled]):hover,
.md-button.md-hue-2.md-fab:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-2.md-accent,
.md-button.md-hue-2.md-accent {
  color: rgb(29, 233, 182);
}

.md-button.md-default-theme.md-hue-2.md-accent.md-fab,
.md-button.md-hue-2.md-accent.md-fab,
.md-button.md-default-theme.md-hue-2.md-accent.md-raised,
.md-button.md-hue-2.md-accent.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(239, 86, 124);
}

.md-button.md-default-theme.md-hue-2.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-hue-2.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-2.md-accent.md-raised:not([disabled]) md-icon,
.md-button.md-hue-2.md-accent.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-hue-2.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-accent.md-fab:not([disabled]):hover,
.md-button.md-hue-2.md-accent.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-2.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-hue-2.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-accent.md-raised:not([disabled]):hover,
.md-button.md-hue-2.md-accent.md-raised:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-2.md-accent:not([disabled]) md-icon,
.md-button.md-hue-2.md-accent:not([disabled]) md-icon {
  color: rgb(29, 233, 182);
}

.md-button.md-default-theme.md-hue-2.md-accent[disabled],
.md-button.md-hue-2.md-accent[disabled],
.md-button.md-default-theme.md-hue-2.md-fab[disabled],
.md-button.md-hue-2.md-fab[disabled],
.md-button.md-default-theme.md-hue-2.md-raised[disabled],
.md-button.md-hue-2.md-raised[disabled],
.md-button.md-default-theme.md-hue-2.md-warn[disabled],
.md-button.md-hue-2.md-warn[disabled],
.md-button.md-default-theme.md-hue-2[disabled],
.md-button.md-hue-2[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.md-button.md-default-theme.md-hue-2.md-accent[disabled] md-icon,
.md-button.md-hue-2.md-accent[disabled] md-icon,
.md-button.md-default-theme.md-hue-2.md-fab[disabled] md-icon,
.md-button.md-hue-2.md-fab[disabled] md-icon,
.md-button.md-default-theme.md-hue-2.md-raised[disabled] md-icon,
.md-button.md-hue-2.md-raised[disabled] md-icon,
.md-button.md-default-theme.md-hue-2.md-warn[disabled] md-icon,
.md-button.md-hue-2.md-warn[disabled] md-icon,
.md-button.md-default-theme.md-hue-2[disabled] md-icon,
.md-button.md-hue-2[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-accent,
._md a.md-hue-2:not(.md-button).md-accent {
  color: rgb(29, 233, 182);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-accent:hover,
._md a.md-hue-2:not(.md-button).md-accent:hover {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-2 .md-ripple,
md-checkbox.md-hue-2 .md-ripple {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-2.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-2.md-checked.md-focused .md-container::before {
  background-color: rgba(239, 86, 124, 0.26);
}

md-checkbox.md-default-theme.md-hue-2.md-checked .md-ink-ripple,
md-checkbox.md-hue-2.md-checked .md-ink-ripple {
  color: rgba(29, 233, 182, 0.87);
}

md-checkbox.md-default-theme.md-hue-2.md-checked .md-icon,
md-checkbox.md-hue-2.md-checked .md-icon {
  background-color: rgba(239, 86, 124, 0.87);
}

md-checkbox.md-default-theme.md-hue-2.md-checked .md-icon::after,
md-checkbox.md-hue-2.md-checked .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

.md-accent .md-default-theme.md-hue-2 .md-datepicker-input-container.md-datepicker-focused,
.md-accent .md-hue-2 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(239, 86, 124);
}

.md-accent .md-default-theme.md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon,
.md-accent .md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon,
.md-default-theme.md-hue-2 .md-datepicker-open.md-accent .md-datepicker-calendar-icon,
.md-hue-2 .md-datepicker-open.md-accent .md-datepicker-calendar-icon {
  color: rgb(29, 233, 182);
}

md-icon.md-default-theme.md-hue-2.md-accent,
md-icon.md-hue-2.md-accent {
  color: rgb(29, 233, 182);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent .md-input,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent .md-input {
  border-color: rgb(239, 86, 124);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent md-icon,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-accent md-icon {
  color: rgb(29, 233, 182);
}

md-list.md-default-theme.md-hue-2 md-list-item>md-icon.md-highlight.md-accent,
md-list.md-hue-2 md-list-item>md-icon.md-highlight.md-accent {
  color: rgb(29, 233, 182);
}

md-nav-bar.md-default-theme.md-hue-2 md-nav-ink-bar,
md-nav-bar.md-hue-2 md-nav-ink-bar {
  color: rgb(29, 233, 182);
  background-image: initial;
  background-color: rgb(239, 86, 124);
}

md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar {
  background-color: rgb(239, 86, 124);
}

md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-nav-bar.md-default-theme.md-hue-2.md-accent>.md-nav-bar md-nav-ink-bar,
md-nav-bar.md-hue-2.md-accent>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar {
  background-color: rgb(239, 86, 124);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar md-nav-ink-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-2>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-progress-linear.md-default-theme.md-hue-2.md-accent .md-container,
md-progress-linear.md-hue-2.md-accent .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-2.md-accent .md-bar,
md-progress-linear.md-hue-2.md-accent .md-bar {
  background-color: rgb(239, 86, 124);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-accent .md-bar1,
md-progress-linear.md-hue-2[md-mode="buffer"].md-accent .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-accent .md-dashed::before,
md-progress-linear.md-hue-2[md-mode="buffer"].md-accent .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-2 .md-on,
md-radio-button.md-hue-2 .md-on {
  background-color: rgba(239, 86, 124, 0.87);
}

md-radio-button.md-default-theme.md-hue-2.md-checked .md-off,
md-radio-button.md-hue-2.md-checked .md-off {
  border-color: rgba(239, 86, 124, 0.87);
}

md-radio-button.md-default-theme.md-hue-2.md-checked .md-ink-ripple,
md-radio-button.md-hue-2.md-checked .md-ink-ripple {
  color: rgba(29, 233, 182, 0.87);
}

md-radio-button.md-default-theme.md-hue-2 .md-container .md-ripple,
md-radio-button.md-hue-2 .md-container .md-ripple {
  color: rgb(0, 191, 165);
}

md-radio-group.md-default-theme.md-hue-2 .md-checked .md-ink-ripple,
md-radio-group.md-hue-2 .md-checked .md-ink-ripple {
  color: rgba(29, 233, 182, 0.26);
}

md-radio-group.md-default-theme.md-hue-2.md-focused:not(:empty) .md-checked .md-container::before,
md-radio-group.md-hue-2.md-focused:not(:empty) .md-checked .md-container::before {
  background-color: rgba(239, 86, 124, 0.26);
}

md-select.md-default-theme.md-hue-2:not([disabled]):focus.md-accent .md-select-value,
md-select.md-hue-2:not([disabled]):focus.md-accent .md-select-value {
  border-bottom-color: rgb(239, 86, 124);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option[selected].md-accent,
md-select-menu.md-hue-2 md-content md-option[selected].md-accent {
  color: rgb(29, 233, 182);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option[selected].md-accent:focus,
md-select-menu.md-hue-2 md-content md-option[selected].md-accent:focus {
  color: rgb(0, 191, 165);
}

md-slider.md-default-theme.md-hue-2 .md-focus-ring,
md-slider.md-hue-2 .md-focus-ring {
  background-color: rgba(232, 0, 55, 0.2);
}

md-slider.md-default-theme.md-hue-2 .md-track.md-track-fill,
md-slider.md-hue-2 .md-track.md-track-fill {
  background-color: rgb(239, 86, 124);
}

md-slider.md-default-theme.md-hue-2 .md-thumb::after,
md-slider.md-hue-2 .md-thumb::after {
  border-color: rgb(239, 86, 124);
  background-color: rgb(239, 86, 124);
}

md-slider.md-default-theme.md-hue-2 .md-sign,
md-slider.md-hue-2 .md-sign {
  background-color: rgb(239, 86, 124);
}

md-slider.md-default-theme.md-hue-2 .md-sign::after,
md-slider.md-hue-2 .md-sign::after {
  border-top-color: rgb(239, 86, 124);
}

md-slider.md-default-theme.md-hue-2[md-vertical] .md-sign::after,
md-slider.md-hue-2[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(239, 86, 124);
}

md-slider.md-default-theme.md-hue-2 .md-thumb-text,
md-slider.md-hue-2 .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-hue-2.md-accent,
.md-subheader.md-hue-2.md-accent {
  color: rgb(29, 233, 182);
}

md-switch.md-default-theme.md-hue-2.md-checked .md-ink-ripple,
md-switch.md-hue-2.md-checked .md-ink-ripple {
  color: rgb(29, 233, 182);
}

md-switch.md-default-theme.md-hue-2.md-checked .md-thumb,
md-switch.md-hue-2.md-checked .md-thumb {
  background-color: rgb(239, 86, 124);
}

md-switch.md-default-theme.md-hue-2.md-checked .md-bar,
md-switch.md-hue-2.md-checked .md-bar {
  background-color: rgba(239, 86, 124, 0.5);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-focused .md-thumb::before,
md-switch.md-hue-2.md-checked.md-focused .md-thumb::before {
  background-color: rgba(239, 86, 124, 0.26);
}

md-tabs.md-default-theme.md-hue-2 md-ink-bar,
md-tabs.md-hue-2 md-ink-bar {
  color: rgb(29, 233, 182);
  background-image: initial;
  background-color: rgb(239, 86, 124);
}

md-tabs.md-default-theme.md-hue-2 .md-tab .md-ripple-container,
md-tabs.md-hue-2 .md-tab .md-ripple-container {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper {
  background-color: rgb(239, 86, 124);
}

md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-tabs.md-default-theme.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-tabs.md-hue-2.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper {
  background-color: rgb(239, 86, 124);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-toolbar.md-accent>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toast.md-default-theme.md-hue-2 .md-toast-content .md-button.md-highlight,
md-toast.md-hue-2 .md-toast-content .md-button.md-highlight {
  color: rgb(29, 233, 182);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar).md-accent,
md-toolbar.md-hue-2:not(.md-menu-toolbar).md-accent {
  background-color: rgb(239, 86, 124);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar).md-accent .md-ink-ripple,
md-toolbar.md-hue-2:not(.md-menu-toolbar).md-accent .md-ink-ripple {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar).md-accent md-icon,
md-toolbar.md-hue-2:not(.md-menu-toolbar).md-accent md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon,
md-toolbar.md-hue-2:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

.md-button.md-default-theme.md-hue-3.md-fab md-icon,
.md-button.md-hue-3.md-fab md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-fab,
.md-button.md-hue-3.md-fab {
  background-color: rgb(255, 140, 156);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-fab:not([disabled]) .md-icon,
.md-button.md-hue-3.md-fab:not([disabled]) .md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-fab:not([disabled]).md-focused,
.md-button.md-hue-3.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-fab:not([disabled]):hover,
.md-button.md-hue-3.md-fab:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-3.md-accent,
.md-button.md-hue-3.md-accent {
  color: rgb(0, 191, 165);
}

.md-button.md-default-theme.md-hue-3.md-accent.md-fab,
.md-button.md-hue-3.md-accent.md-fab,
.md-button.md-default-theme.md-hue-3.md-accent.md-raised,
.md-button.md-hue-3.md-accent.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-3.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-hue-3.md-accent.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-3.md-accent.md-raised:not([disabled]) md-icon,
.md-button.md-hue-3.md-accent.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-hue-3.md-accent.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-accent.md-fab:not([disabled]):hover,
.md-button.md-hue-3.md-accent.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-3.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-hue-3.md-accent.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-accent.md-raised:not([disabled]):hover,
.md-button.md-hue-3.md-accent.md-raised:not([disabled]):hover {
  background-color: rgb(255, 140, 156);
}

.md-button.md-default-theme.md-hue-3.md-accent:not([disabled]) md-icon,
.md-button.md-hue-3.md-accent:not([disabled]) md-icon {
  color: rgb(0, 191, 165);
}

.md-button.md-default-theme.md-hue-3.md-accent[disabled],
.md-button.md-hue-3.md-accent[disabled],
.md-button.md-default-theme.md-hue-3.md-fab[disabled],
.md-button.md-hue-3.md-fab[disabled],
.md-button.md-default-theme.md-hue-3.md-raised[disabled],
.md-button.md-hue-3.md-raised[disabled],
.md-button.md-default-theme.md-hue-3.md-warn[disabled],
.md-button.md-hue-3.md-warn[disabled],
.md-button.md-default-theme.md-hue-3[disabled],
.md-button.md-hue-3[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.md-button.md-default-theme.md-hue-3.md-accent[disabled] md-icon,
.md-button.md-hue-3.md-accent[disabled] md-icon,
.md-button.md-default-theme.md-hue-3.md-fab[disabled] md-icon,
.md-button.md-hue-3.md-fab[disabled] md-icon,
.md-button.md-default-theme.md-hue-3.md-raised[disabled] md-icon,
.md-button.md-hue-3.md-raised[disabled] md-icon,
.md-button.md-default-theme.md-hue-3.md-warn[disabled] md-icon,
.md-button.md-hue-3.md-warn[disabled] md-icon,
.md-button.md-default-theme.md-hue-3[disabled] md-icon,
.md-button.md-hue-3[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-accent,
._md a.md-hue-3:not(.md-button).md-accent {
  color: rgb(0, 191, 165);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-accent:hover,
._md a.md-hue-3:not(.md-button).md-accent:hover {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-3 .md-ripple,
md-checkbox.md-hue-3 .md-ripple {
  color: rgb(0, 191, 165);
}

md-checkbox.md-default-theme.md-hue-3.md-checked.md-focused .md-container::before,
md-checkbox.md-hue-3.md-checked.md-focused .md-container::before {
  background-color: rgba(255, 140, 156, 0.26);
}

md-checkbox.md-default-theme.md-hue-3.md-checked .md-ink-ripple,
md-checkbox.md-hue-3.md-checked .md-ink-ripple {
  color: rgba(0, 191, 165, 0.87);
}

md-checkbox.md-default-theme.md-hue-3.md-checked .md-icon,
md-checkbox.md-hue-3.md-checked .md-icon {
  background-color: rgba(255, 140, 156, 0.87);
}

md-checkbox.md-default-theme.md-hue-3.md-checked .md-icon::after,
md-checkbox.md-hue-3.md-checked .md-icon::after {
  border-color: rgba(38, 38, 38, 0.87);
}

.md-accent .md-default-theme.md-hue-3 .md-datepicker-input-container.md-datepicker-focused,
.md-accent .md-hue-3 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(255, 140, 156);
}

.md-accent .md-default-theme.md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon,
.md-accent .md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon,
.md-default-theme.md-hue-3 .md-datepicker-open.md-accent .md-datepicker-calendar-icon,
.md-hue-3 .md-datepicker-open.md-accent .md-datepicker-calendar-icon {
  color: rgb(0, 191, 165);
}

md-icon.md-default-theme.md-hue-3.md-accent,
md-icon.md-hue-3.md-accent {
  color: rgb(0, 191, 165);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent .md-input,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent .md-input {
  border-color: rgb(255, 140, 156);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent md-icon,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-accent md-icon {
  color: rgb(0, 191, 165);
}

md-list.md-default-theme.md-hue-3 md-list-item>md-icon.md-highlight.md-accent,
md-list.md-hue-3 md-list-item>md-icon.md-highlight.md-accent {
  color: rgb(0, 191, 165);
}

md-nav-bar.md-default-theme.md-hue-3 md-nav-ink-bar,
md-nav-bar.md-hue-3 md-nav-ink-bar {
  color: rgb(0, 191, 165);
  background-image: initial;
  background-color: rgb(255, 140, 156);
}

md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar {
  background-color: rgb(255, 140, 156);
}

md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-nav-bar.md-default-theme.md-hue-3.md-accent>.md-nav-bar md-nav-ink-bar,
md-nav-bar.md-hue-3.md-accent>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar {
  background-color: rgb(255, 140, 156);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar md-nav-ink-bar,
md-toolbar.md-accent>md-nav-bar.md-hue-3>.md-nav-bar md-nav-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-progress-linear.md-default-theme.md-hue-3.md-accent .md-container,
md-progress-linear.md-hue-3.md-accent .md-container {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-3.md-accent .md-bar,
md-progress-linear.md-hue-3.md-accent .md-bar {
  background-color: rgb(255, 140, 156);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-accent .md-bar1,
md-progress-linear.md-hue-3[md-mode="buffer"].md-accent .md-bar1 {
  background-color: rgb(131, 54, 61);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-accent .md-dashed::before,
md-progress-linear.md-hue-3[md-mode="buffer"].md-accent .md-dashed::before {
  background-image: radial-gradient(rgb(131, 54, 61) 0px, rgb(131, 54, 61) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-3 .md-on,
md-radio-button.md-hue-3 .md-on {
  background-color: rgba(255, 140, 156, 0.87);
}

md-radio-button.md-default-theme.md-hue-3.md-checked .md-off,
md-radio-button.md-hue-3.md-checked .md-off {
  border-color: rgba(255, 140, 156, 0.87);
}

md-radio-button.md-default-theme.md-hue-3.md-checked .md-ink-ripple,
md-radio-button.md-hue-3.md-checked .md-ink-ripple {
  color: rgba(0, 191, 165, 0.87);
}

md-radio-button.md-default-theme.md-hue-3 .md-container .md-ripple,
md-radio-button.md-hue-3 .md-container .md-ripple {
  color: rgb(0, 191, 165);
}

md-radio-group.md-default-theme.md-hue-3 .md-checked .md-ink-ripple,
md-radio-group.md-hue-3 .md-checked .md-ink-ripple {
  color: rgba(0, 191, 165, 0.26);
}

md-radio-group.md-default-theme.md-hue-3.md-focused:not(:empty) .md-checked .md-container::before,
md-radio-group.md-hue-3.md-focused:not(:empty) .md-checked .md-container::before {
  background-color: rgba(255, 140, 156, 0.26);
}

md-select.md-default-theme.md-hue-3:not([disabled]):focus.md-accent .md-select-value,
md-select.md-hue-3:not([disabled]):focus.md-accent .md-select-value {
  border-bottom-color: rgb(255, 140, 156);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option[selected].md-accent,
md-select-menu.md-hue-3 md-content md-option[selected].md-accent {
  color: rgb(0, 191, 165);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option[selected].md-accent:focus,
md-select-menu.md-hue-3 md-content md-option[selected].md-accent:focus {
  color: rgb(0, 191, 165);
}

md-slider.md-default-theme.md-hue-3 .md-focus-ring,
md-slider.md-hue-3 .md-focus-ring {
  background-color: rgba(232, 0, 55, 0.2);
}

md-slider.md-default-theme.md-hue-3 .md-track.md-track-fill,
md-slider.md-hue-3 .md-track.md-track-fill {
  background-color: rgb(255, 140, 156);
}

md-slider.md-default-theme.md-hue-3 .md-thumb::after,
md-slider.md-hue-3 .md-thumb::after {
  border-color: rgb(255, 140, 156);
  background-color: rgb(255, 140, 156);
}

md-slider.md-default-theme.md-hue-3 .md-sign,
md-slider.md-hue-3 .md-sign {
  background-color: rgb(255, 140, 156);
}

md-slider.md-default-theme.md-hue-3 .md-sign::after,
md-slider.md-hue-3 .md-sign::after {
  border-top-color: rgb(255, 140, 156);
}

md-slider.md-default-theme.md-hue-3[md-vertical] .md-sign::after,
md-slider.md-hue-3[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(255, 140, 156);
}

md-slider.md-default-theme.md-hue-3 .md-thumb-text,
md-slider.md-hue-3 .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-hue-3.md-accent,
.md-subheader.md-hue-3.md-accent {
  color: rgb(0, 191, 165);
}

md-switch.md-default-theme.md-hue-3.md-checked .md-ink-ripple,
md-switch.md-hue-3.md-checked .md-ink-ripple {
  color: rgb(0, 191, 165);
}

md-switch.md-default-theme.md-hue-3.md-checked .md-thumb,
md-switch.md-hue-3.md-checked .md-thumb {
  background-color: rgb(255, 140, 156);
}

md-switch.md-default-theme.md-hue-3.md-checked .md-bar,
md-switch.md-hue-3.md-checked .md-bar {
  background-color: rgba(255, 140, 156, 0.5);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-focused .md-thumb::before,
md-switch.md-hue-3.md-checked.md-focused .md-thumb::before {
  background-color: rgba(255, 140, 156, 0.26);
}

md-tabs.md-default-theme.md-hue-3 md-ink-bar,
md-tabs.md-hue-3 md-ink-bar {
  color: rgb(0, 191, 165);
  background-image: initial;
  background-color: rgb(255, 140, 156);
}

md-tabs.md-default-theme.md-hue-3 .md-tab .md-ripple-container,
md-tabs.md-hue-3 .md-tab .md-ripple-container {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper {
  background-color: rgb(255, 140, 156);
}

md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-tabs.md-default-theme.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-tabs.md-hue-3.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper {
  background-color: rgb(255, 140, 156);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(167, 255, 235);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-accent>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar,
md-toolbar.md-accent>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar {
  color: rgb(255, 118, 132);
  background-image: initial;
  background-color: rgb(0, 137, 123);
}

md-toast.md-default-theme.md-hue-3 .md-toast-content .md-button.md-highlight,
md-toast.md-hue-3 .md-toast-content .md-button.md-highlight {
  color: rgb(0, 191, 165);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar).md-accent,
md-toolbar.md-hue-3:not(.md-menu-toolbar).md-accent {
  background-color: rgb(255, 140, 156);
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar).md-accent .md-ink-ripple,
md-toolbar.md-hue-3:not(.md-menu-toolbar).md-accent .md-ink-ripple {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar).md-accent md-icon,
md-toolbar.md-hue-3:not(.md-menu-toolbar).md-accent md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon,
md-toolbar.md-hue-3:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.26);
}

.md-button.md-default-theme.md-warn,
.md-button.md-warn {
  color: rgb(255, 87, 34);
}

.md-button.md-default-theme.md-warn.md-fab,
.md-button.md-warn.md-fab,
.md-button.md-default-theme.md-warn.md-raised,
.md-button.md-warn.md-raised {
  color: rgb(255, 255, 255);
  background-color: rgb(42, 204, 255);
}

.md-button.md-default-theme.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-warn.md-raised:not([disabled]) md-icon,
.md-button.md-warn.md-raised:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.md-button.md-default-theme.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-warn.md-fab:not([disabled]):hover,
.md-button.md-warn.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-warn.md-raised:not([disabled]):hover,
.md-button.md-warn.md-raised:not([disabled]):hover {
  background-color: rgb(244, 81, 30);
}

.md-button.md-default-theme.md-warn:not([disabled]) md-icon,
.md-button.md-warn:not([disabled]) md-icon {
  color: rgb(255, 87, 34);
}

._md a.md-default-theme:not(.md-button).md-warn,
._md a:not(.md-button).md-warn {
  color: rgb(255, 87, 34);
}

._md a.md-default-theme:not(.md-button).md-warn:hover,
._md a:not(.md-button).md-warn:hover {
  color: rgb(25, 181, 230);
}

md-checkbox.md-default-theme:not([disabled]).md-warn .md-ripple,
md-checkbox:not([disabled]).md-warn .md-ripple {
  color: rgb(11, 174, 225);
}

md-checkbox.md-default-theme:not([disabled]).md-warn .md-ink-ripple,
md-checkbox:not([disabled]).md-warn .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-checkbox:not([disabled]).md-warn.md-checked .md-ink-ripple {
  color: rgba(255, 87, 34, 0.87);
}

md-checkbox.md-default-theme:not([disabled]).md-warn:not(.md-checked) .md-icon,
md-checkbox:not([disabled]).md-warn:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme:not([disabled]).md-warn.md-checked .md-icon,
md-checkbox:not([disabled]).md-warn.md-checked .md-icon {
  background-color: rgba(42, 204, 255, 0.87);
}

md-checkbox.md-default-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before,
md-checkbox:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before {
  background-color: rgba(42, 204, 255, 0.26);
}

md-checkbox.md-default-theme:not([disabled]).md-warn.md-checked .md-icon::after,
md-checkbox:not([disabled]).md-warn.md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

.md-default-theme .md-datepicker-input-container.md-datepicker-invalid,
.md-datepicker-input-container.md-datepicker-invalid,
.md-warn .md-default-theme .md-datepicker-input-container.md-datepicker-focused,
.md-warn .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(221, 44, 0);
}

.md-default-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-warn .md-default-theme .md-datepicker-open .md-datepicker-calendar-icon,
.md-warn .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(34, 211, 255);
}

md-icon.md-default-theme.md-warn,
md-icon.md-warn {
  color: rgb(255, 87, 34);
}

md-input-container.md-default-theme label.md-required::after,
md-input-container label.md-required::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme .md-input-message-animation,
md-input-container .md-input-message-animation,
md-input-container.md-default-theme .md-input-messages-animation,
md-input-container .md-input-messages-animation {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-default-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn md-icon {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-input-invalid .md-input,
md-input-container.md-input-invalid .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-input-invalid .md-char-counter,
md-input-container.md-input-invalid .md-char-counter,
md-input-container.md-default-theme.md-input-invalid .md-input-message-animation,
md-input-container.md-input-invalid .md-input-message-animation,
md-input-container.md-default-theme.md-input-invalid label,
md-input-container.md-input-invalid label {
  color: rgb(34, 211, 255);
}

md-nav-bar.md-default-theme.md-warn>.md-nav-bar,
md-nav-bar.md-warn>.md-nav-bar {
  background-color: rgb(42, 204, 255);
}

md-nav-bar.md-default-theme.md-warn>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-warn>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-nav-bar.md-default-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgb(255, 255, 255);
}

md-nav-bar.md-default-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme>.md-nav-bar,
md-toolbar.md-warn>md-nav-bar>.md-nav-bar {
  background-color: rgb(42, 204, 255);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-warn>md-nav-bar>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgb(255, 255, 255);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-progress-linear.md-default-theme.md-warn .md-container,
md-progress-linear.md-warn .md-container {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-warn .md-bar,
md-progress-linear.md-warn .md-bar {
  background-color: rgb(42, 204, 255);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-warn .md-bar1,
md-progress-linear[md-mode="buffer"].md-warn .md-bar1 {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme[md-mode="buffer"].md-warn .md-dashed::before,
md-progress-linear[md-mode="buffer"].md-warn .md-dashed::before {
  background-image: radial-gradient(rgb(0, 109, 143) 0px, rgb(0, 109, 143) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme:not([disabled]).md-warn .md-on,
md-radio-button:not([disabled]).md-warn .md-on,
md-radio-button.md-default-theme:not([disabled]) .md-warn .md-on,
md-radio-button:not([disabled]) .md-warn .md-on,
md-radio-group.md-default-theme:not([disabled]).md-warn .md-on,
md-radio-group:not([disabled]).md-warn .md-on,
md-radio-group.md-default-theme:not([disabled]) .md-warn .md-on,
md-radio-group:not([disabled]) .md-warn .md-on {
  background-color: rgba(42, 204, 255, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-warn.md-checked .md-off,
md-radio-button:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]).md-warn .md-checked .md-off,
md-radio-button:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-default-theme:not([disabled]) .md-warn .md-checked .md-off,
md-radio-button:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]).md-warn.md-checked .md-off,
md-radio-group:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]).md-warn .md-checked .md-off,
md-radio-group:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-default-theme:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group:not([disabled]) .md-warn .md-checked .md-off {
  border-color: rgba(42, 204, 255, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-button:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group:not([disabled]) .md-warn .md-checked .md-ink-ripple {
  color: rgba(255, 87, 34, 0.87);
}

md-radio-button.md-default-theme:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-default-theme:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-button:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-default-theme:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-default-theme:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group:not([disabled]) .md-warn .md-container .md-ripple {
  color: rgb(11, 174, 225);
}

md-radio-group.md-default-theme.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-default-theme.md-focused:not(:empty).md-warn .md-checked .md-container::before,
md-radio-group.md-focused:not(:empty).md-warn .md-checked .md-container::before {
  background-color: rgba(42, 204, 255, 0.26);
}

md-input-container md-select.md-default-theme .md-select-value span:first-child::after,
md-input-container md-select .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-input-invalid md-select.md-default-theme .md-select-value,
md-input-container.md-input-invalid md-select .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme .md-select-value span:first-child::after,
md-select .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-select.md-default-theme.ng-invalid.ng-touched .md-select-value,
md-select.ng-invalid.ng-touched .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme:not([disabled]):focus.md-warn .md-select-value,
md-select:not([disabled]):focus.md-warn .md-select-value {
  border-bottom-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn .md-focus-ring,
md-slider.md-warn .md-focus-ring {
  background-color: rgba(0, 142, 187, 0.38);
}

md-slider.md-default-theme.md-warn .md-track.md-track-fill,
md-slider.md-warn .md-track.md-track-fill {
  background-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn .md-thumb::after,
md-slider.md-warn .md-thumb::after {
  border-color: rgb(42, 204, 255);
  background-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn .md-sign,
md-slider.md-warn .md-sign {
  background-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn .md-sign::after,
md-slider.md-warn .md-sign::after {
  border-top-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn[md-vertical] .md-sign::after,
md-slider.md-warn[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(42, 204, 255);
}

md-slider.md-default-theme.md-warn .md-thumb-text,
md-slider.md-warn .md-thumb-text {
  color: rgb(255, 255, 255);
}

.md-subheader.md-default-theme.md-warn,
.md-subheader.md-warn {
  color: rgb(255, 87, 34);
}

md-switch.md-default-theme.md-checked.md-warn .md-ink-ripple,
md-switch.md-checked.md-warn .md-ink-ripple {
  color: rgb(255, 87, 34);
}

md-switch.md-default-theme.md-checked.md-warn .md-thumb,
md-switch.md-checked.md-warn .md-thumb {
  background-color: rgb(42, 204, 255);
}

md-switch.md-default-theme.md-checked.md-warn .md-bar,
md-switch.md-checked.md-warn .md-bar {
  background-color: rgba(42, 204, 255, 0.5);
}

md-switch.md-default-theme.md-checked.md-warn.md-focused .md-thumb::before,
md-switch.md-checked.md-warn.md-focused .md-thumb::before {
  background-color: rgba(42, 204, 255, 0.26);
}

md-tabs.md-default-theme.md-warn>md-tabs-wrapper,
md-tabs.md-warn>md-tabs-wrapper {
  background-color: rgb(42, 204, 255);
}

md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgb(255, 255, 255);
}

md-tabs.md-default-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper {
  background-color: rgb(42, 204, 255);
}

md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgb(255, 255, 255);
}

md-toolbar.md-warn>md-tabs.md-default-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toast.md-default-theme .md-toast-content .md-button.md-highlight.md-warn,
md-toast .md-toast-content .md-button.md-highlight.md-warn {
  color: rgb(255, 87, 34);
}

md-toolbar.md-default-theme:not(.md-menu-toolbar).md-warn,
md-toolbar:not(.md-menu-toolbar).md-warn {
  background-color: rgb(42, 204, 255);
  color: rgb(255, 255, 255);
}

.md-button.md-default-theme.md-hue-1.md-warn,
.md-button.md-hue-1.md-warn {
  color: rgb(255, 138, 101);
}

.md-button.md-default-theme.md-hue-1.md-warn.md-fab,
.md-button.md-hue-1.md-warn.md-fab,
.md-button.md-default-theme.md-hue-1.md-warn.md-raised,
.md-button.md-hue-1.md-warn.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(0, 175, 231);
}

.md-button.md-default-theme.md-hue-1.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-hue-1.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-1.md-warn.md-raised:not([disabled]) md-icon,
.md-button.md-hue-1.md-warn.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-hue-1.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-warn.md-fab:not([disabled]):hover,
.md-button.md-hue-1.md-warn.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-1.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-hue-1.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1.md-warn.md-raised:not([disabled]):hover,
.md-button.md-hue-1.md-warn.md-raised:not([disabled]):hover {
  background-color: rgb(244, 81, 30);
}

.md-button.md-default-theme.md-hue-1.md-warn:not([disabled]) md-icon,
.md-button.md-hue-1.md-warn:not([disabled]) md-icon {
  color: rgb(255, 138, 101);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-warn,
._md a.md-hue-1:not(.md-button).md-warn {
  color: rgb(255, 138, 101);
}

._md a.md-default-theme.md-hue-1:not(.md-button).md-warn:hover,
._md a.md-hue-1:not(.md-button).md-warn:hover {
  color: rgb(25, 181, 230);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn .md-ripple,
md-checkbox.md-hue-1:not([disabled]).md-warn .md-ripple {
  color: rgb(11, 174, 225);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn .md-ink-ripple,
md-checkbox.md-hue-1:not([disabled]).md-warn .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-checkbox.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple {
  color: rgba(255, 138, 101, 0.87);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn:not(.md-checked) .md-icon,
md-checkbox.md-hue-1:not([disabled]).md-warn:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-icon,
md-checkbox.md-hue-1:not([disabled]).md-warn.md-checked .md-icon {
  background-color: rgba(0, 175, 231, 0.87);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before,
md-checkbox.md-hue-1:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before {
  background-color: rgba(0, 175, 231, 0.26);
}

md-checkbox.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-icon::after,
md-checkbox.md-hue-1:not([disabled]).md-warn.md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

.md-default-theme.md-hue-1 .md-datepicker-input-container.md-datepicker-invalid,
.md-hue-1 .md-datepicker-input-container.md-datepicker-invalid,
.md-warn .md-default-theme.md-hue-1 .md-datepicker-input-container.md-datepicker-focused,
.md-warn .md-hue-1 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(221, 44, 0);
}

.md-default-theme.md-hue-1 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-hue-1 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-warn .md-default-theme.md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon,
.md-warn .md-hue-1 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(34, 211, 255);
}

md-icon.md-default-theme.md-hue-1.md-warn,
md-icon.md-hue-1.md-warn {
  color: rgb(255, 138, 101);
}

md-input-container.md-default-theme.md-hue-1 label.md-required::after,
md-input-container.md-hue-1 label.md-required::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-1 .md-input-message-animation,
md-input-container.md-hue-1 .md-input-message-animation,
md-input-container.md-default-theme.md-hue-1 .md-input-messages-animation,
md-input-container.md-hue-1 .md-input-messages-animation {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn .md-input,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-default-theme.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn md-icon,
md-input-container.md-hue-1:not(.md-input-invalid).md-input-focused.md-warn md-icon {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-1.md-input-invalid .md-input,
md-input-container.md-hue-1.md-input-invalid .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-1.md-input-invalid .md-char-counter,
md-input-container.md-hue-1.md-input-invalid .md-char-counter,
md-input-container.md-default-theme.md-hue-1.md-input-invalid .md-input-message-animation,
md-input-container.md-hue-1.md-input-invalid .md-input-message-animation,
md-input-container.md-default-theme.md-hue-1.md-input-invalid label,
md-input-container.md-hue-1.md-input-invalid label {
  color: rgb(34, 211, 255);
}

md-nav-bar.md-default-theme.md-hue-1.md-warn>.md-nav-bar,
md-nav-bar.md-hue-1.md-warn>.md-nav-bar {
  background-color: rgb(0, 175, 231);
}

md-nav-bar.md-default-theme.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-nav-bar.md-default-theme.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-1.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar,
md-toolbar.md-warn>md-nav-bar.md-hue-1>.md-nav-bar {
  background-color: rgb(0, 175, 231);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-warn>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-1>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-progress-linear.md-default-theme.md-hue-1.md-warn .md-container,
md-progress-linear.md-hue-1.md-warn .md-container {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-1.md-warn .md-bar,
md-progress-linear.md-hue-1.md-warn .md-bar {
  background-color: rgb(0, 175, 231);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-warn .md-bar1,
md-progress-linear.md-hue-1[md-mode="buffer"].md-warn .md-bar1 {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-1[md-mode="buffer"].md-warn .md-dashed::before,
md-progress-linear.md-hue-1[md-mode="buffer"].md-warn .md-dashed::before {
  background-image: radial-gradient(rgb(0, 109, 143) 0px, rgb(0, 109, 143) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn .md-on,
md-radio-button.md-hue-1:not([disabled]).md-warn .md-on,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-on,
md-radio-button.md-hue-1:not([disabled]) .md-warn .md-on,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn .md-on,
md-radio-group.md-hue-1:not([disabled]).md-warn .md-on,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-on,
md-radio-group.md-hue-1:not([disabled]) .md-warn .md-on {
  background-color: rgba(0, 175, 231, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-checked .md-off,
md-radio-button.md-hue-1:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-hue-1:not([disabled]) .md-warn .md-checked .md-off {
  border-color: rgba(0, 175, 231, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-warn .md-checked .md-ink-ripple {
  color: rgba(255, 138, 101, 0.87);
}

md-radio-button.md-default-theme.md-hue-1:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-hue-1:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-button.md-hue-1:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-hue-1:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-1:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-hue-1:not([disabled]) .md-warn .md-container .md-ripple {
  color: rgb(11, 174, 225);
}

md-radio-group.md-default-theme.md-hue-1.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-hue-1.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-default-theme.md-hue-1.md-focused:not(:empty).md-warn .md-checked .md-container::before,
md-radio-group.md-hue-1.md-focused:not(:empty).md-warn .md-checked .md-container::before {
  background-color: rgba(0, 175, 231, 0.26);
}

md-input-container md-select.md-default-theme.md-hue-1 .md-select-value span:first-child::after,
md-input-container md-select.md-hue-1 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-1 .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-1 .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-1 .md-select-value span:first-child::after,
md-select.md-hue-1 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-select.md-default-theme.md-hue-1.ng-invalid.ng-touched .md-select-value,
md-select.md-hue-1.ng-invalid.ng-touched .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-1:not([disabled]):focus.md-warn .md-select-value,
md-select.md-hue-1:not([disabled]):focus.md-warn .md-select-value {
  border-bottom-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-focus-ring,
md-slider.md-hue-1.md-warn .md-focus-ring {
  background-color: rgba(0, 142, 187, 0.38);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-track.md-track-fill,
md-slider.md-hue-1.md-warn .md-track.md-track-fill {
  background-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-thumb::after,
md-slider.md-hue-1.md-warn .md-thumb::after {
  border-color: rgb(0, 175, 231);
  background-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-sign,
md-slider.md-hue-1.md-warn .md-sign {
  background-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-sign::after,
md-slider.md-hue-1.md-warn .md-sign::after {
  border-top-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn[md-vertical] .md-sign::after,
md-slider.md-hue-1.md-warn[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 175, 231);
}

md-slider.md-default-theme.md-hue-1.md-warn .md-thumb-text,
md-slider.md-hue-1.md-warn .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-hue-1.md-warn,
.md-subheader.md-hue-1.md-warn {
  color: rgb(255, 138, 101);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-warn .md-ink-ripple,
md-switch.md-hue-1.md-checked.md-warn .md-ink-ripple {
  color: rgb(255, 138, 101);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-warn .md-thumb,
md-switch.md-hue-1.md-checked.md-warn .md-thumb {
  background-color: rgb(0, 175, 231);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-warn .md-bar,
md-switch.md-hue-1.md-checked.md-warn .md-bar {
  background-color: rgba(0, 175, 231, 0.5);
}

md-switch.md-default-theme.md-hue-1.md-checked.md-warn.md-focused .md-thumb::before,
md-switch.md-hue-1.md-checked.md-warn.md-focused .md-thumb::before {
  background-color: rgba(0, 175, 231, 0.26);
}

md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper {
  background-color: rgb(0, 175, 231);
}

md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-1.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper {
  background-color: rgb(0, 175, 231);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-1>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toast.md-default-theme.md-hue-1 .md-toast-content .md-button.md-highlight.md-warn,
md-toast.md-hue-1 .md-toast-content .md-button.md-highlight.md-warn {
  color: rgb(255, 138, 101);
}

md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-warn,
md-toolbar.md-hue-1:not(.md-menu-toolbar).md-warn {
  background-color: rgb(0, 175, 231);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2.md-warn,
.md-button.md-hue-2.md-warn {
  color: rgb(39, 188, 234);
}

.md-button.md-default-theme.md-hue-2.md-warn.md-fab,
.md-button.md-hue-2.md-warn.md-fab,
.md-button.md-default-theme.md-hue-2.md-warn.md-raised,
.md-button.md-hue-2.md-warn.md-raised {
  color: rgb(255, 255, 255);
  background-color: rgb(216, 67, 21);
}

.md-button.md-default-theme.md-hue-2.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-hue-2.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-2.md-warn.md-raised:not([disabled]) md-icon,
.md-button.md-hue-2.md-warn.md-raised:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.md-button.md-default-theme.md-hue-2.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-hue-2.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-warn.md-fab:not([disabled]):hover,
.md-button.md-hue-2.md-warn.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-2.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-hue-2.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2.md-warn.md-raised:not([disabled]):hover,
.md-button.md-hue-2.md-warn.md-raised:not([disabled]):hover {
  background-color: rgb(244, 81, 30);
}

.md-button.md-default-theme.md-hue-2.md-warn:not([disabled]) md-icon,
.md-button.md-hue-2.md-warn:not([disabled]) md-icon {
  color: rgb(39, 188, 234);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-warn,
._md a.md-hue-2:not(.md-button).md-warn {
  color: rgb(39, 188, 234);
}

._md a.md-default-theme.md-hue-2:not(.md-button).md-warn:hover,
._md a.md-hue-2:not(.md-button).md-warn:hover {
  color: rgb(25, 181, 230);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn .md-ripple,
md-checkbox.md-hue-2:not([disabled]).md-warn .md-ripple {
  color: rgb(11, 174, 225);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn .md-ink-ripple,
md-checkbox.md-hue-2:not([disabled]).md-warn .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-checkbox.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple {
  color: rgba(39, 188, 234, 0.87);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn:not(.md-checked) .md-icon,
md-checkbox.md-hue-2:not([disabled]).md-warn:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-icon,
md-checkbox.md-hue-2:not([disabled]).md-warn.md-checked .md-icon {
  background-color: rgba(216, 67, 21, 0.87);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before,
md-checkbox.md-hue-2:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before {
  background-color: rgba(216, 67, 21, 0.26);
}

md-checkbox.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-icon::after,
md-checkbox.md-hue-2:not([disabled]).md-warn.md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

.md-default-theme.md-hue-2 .md-datepicker-input-container.md-datepicker-invalid,
.md-hue-2 .md-datepicker-input-container.md-datepicker-invalid,
.md-warn .md-default-theme.md-hue-2 .md-datepicker-input-container.md-datepicker-focused,
.md-warn .md-hue-2 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(221, 44, 0);
}

.md-default-theme.md-hue-2 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-hue-2 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-warn .md-default-theme.md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon,
.md-warn .md-hue-2 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(34, 211, 255);
}

md-icon.md-default-theme.md-hue-2.md-warn,
md-icon.md-hue-2.md-warn {
  color: rgb(39, 188, 234);
}

md-input-container.md-default-theme.md-hue-2 label.md-required::after,
md-input-container.md-hue-2 label.md-required::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-2 .md-input-message-animation,
md-input-container.md-hue-2 .md-input-message-animation,
md-input-container.md-default-theme.md-hue-2 .md-input-messages-animation,
md-input-container.md-hue-2 .md-input-messages-animation {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn .md-input,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-default-theme.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn md-icon,
md-input-container.md-hue-2:not(.md-input-invalid).md-input-focused.md-warn md-icon {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-2.md-input-invalid .md-input,
md-input-container.md-hue-2.md-input-invalid .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-2.md-input-invalid .md-char-counter,
md-input-container.md-hue-2.md-input-invalid .md-char-counter,
md-input-container.md-default-theme.md-hue-2.md-input-invalid .md-input-message-animation,
md-input-container.md-hue-2.md-input-invalid .md-input-message-animation,
md-input-container.md-default-theme.md-hue-2.md-input-invalid label,
md-input-container.md-hue-2.md-input-invalid label {
  color: rgb(34, 211, 255);
}

md-nav-bar.md-default-theme.md-hue-2.md-warn>.md-nav-bar,
md-nav-bar.md-hue-2.md-warn>.md-nav-bar {
  background-color: rgb(216, 67, 21);
}

md-nav-bar.md-default-theme.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-nav-bar.md-default-theme.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgb(255, 255, 255);
}

md-nav-bar.md-default-theme.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-2.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar,
md-toolbar.md-warn>md-nav-bar.md-hue-2>.md-nav-bar {
  background-color: rgb(216, 67, 21);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-warn>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgb(255, 255, 255);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-2>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-progress-linear.md-default-theme.md-hue-2.md-warn .md-container,
md-progress-linear.md-hue-2.md-warn .md-container {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-2.md-warn .md-bar,
md-progress-linear.md-hue-2.md-warn .md-bar {
  background-color: rgb(216, 67, 21);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-warn .md-bar1,
md-progress-linear.md-hue-2[md-mode="buffer"].md-warn .md-bar1 {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-2[md-mode="buffer"].md-warn .md-dashed::before,
md-progress-linear.md-hue-2[md-mode="buffer"].md-warn .md-dashed::before {
  background-image: radial-gradient(rgb(0, 109, 143) 0px, rgb(0, 109, 143) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn .md-on,
md-radio-button.md-hue-2:not([disabled]).md-warn .md-on,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-on,
md-radio-button.md-hue-2:not([disabled]) .md-warn .md-on,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn .md-on,
md-radio-group.md-hue-2:not([disabled]).md-warn .md-on,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-on,
md-radio-group.md-hue-2:not([disabled]) .md-warn .md-on {
  background-color: rgba(216, 67, 21, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-checked .md-off,
md-radio-button.md-hue-2:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-hue-2:not([disabled]) .md-warn .md-checked .md-off {
  border-color: rgba(216, 67, 21, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-warn .md-checked .md-ink-ripple {
  color: rgba(39, 188, 234, 0.87);
}

md-radio-button.md-default-theme.md-hue-2:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-hue-2:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-button.md-hue-2:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-hue-2:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-2:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-hue-2:not([disabled]) .md-warn .md-container .md-ripple {
  color: rgb(11, 174, 225);
}

md-radio-group.md-default-theme.md-hue-2.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-hue-2.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-default-theme.md-hue-2.md-focused:not(:empty).md-warn .md-checked .md-container::before,
md-radio-group.md-hue-2.md-focused:not(:empty).md-warn .md-checked .md-container::before {
  background-color: rgba(216, 67, 21, 0.26);
}

md-input-container md-select.md-default-theme.md-hue-2 .md-select-value span:first-child::after,
md-input-container md-select.md-hue-2 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-2 .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-2 .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-2 .md-select-value span:first-child::after,
md-select.md-hue-2 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-select.md-default-theme.md-hue-2.ng-invalid.ng-touched .md-select-value,
md-select.md-hue-2.ng-invalid.ng-touched .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-2:not([disabled]):focus.md-warn .md-select-value,
md-select.md-hue-2:not([disabled]):focus.md-warn .md-select-value {
  border-bottom-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-focus-ring,
md-slider.md-hue-2.md-warn .md-focus-ring {
  background-color: rgba(0, 142, 187, 0.38);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-track.md-track-fill,
md-slider.md-hue-2.md-warn .md-track.md-track-fill {
  background-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-thumb::after,
md-slider.md-hue-2.md-warn .md-thumb::after {
  border-color: rgb(216, 67, 21);
  background-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-sign,
md-slider.md-hue-2.md-warn .md-sign {
  background-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-sign::after,
md-slider.md-hue-2.md-warn .md-sign::after {
  border-top-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn[md-vertical] .md-sign::after,
md-slider.md-hue-2.md-warn[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(216, 67, 21);
}

md-slider.md-default-theme.md-hue-2.md-warn .md-thumb-text,
md-slider.md-hue-2.md-warn .md-thumb-text {
  color: rgb(255, 255, 255);
}

.md-subheader.md-default-theme.md-hue-2.md-warn,
.md-subheader.md-hue-2.md-warn {
  color: rgb(39, 188, 234);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-warn .md-ink-ripple,
md-switch.md-hue-2.md-checked.md-warn .md-ink-ripple {
  color: rgb(39, 188, 234);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-warn .md-thumb,
md-switch.md-hue-2.md-checked.md-warn .md-thumb {
  background-color: rgb(216, 67, 21);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-warn .md-bar,
md-switch.md-hue-2.md-checked.md-warn .md-bar {
  background-color: rgba(216, 67, 21, 0.5);
}

md-switch.md-default-theme.md-hue-2.md-checked.md-warn.md-focused .md-thumb::before,
md-switch.md-hue-2.md-checked.md-warn.md-focused .md-thumb::before {
  background-color: rgba(216, 67, 21, 0.26);
}

md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper {
  background-color: rgb(216, 67, 21);
}

md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgb(255, 255, 255);
}

md-tabs.md-default-theme.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-2.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper {
  background-color: rgb(216, 67, 21);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgb(255, 255, 255);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-2>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(38, 38, 38, 0.1);
}

md-toast.md-default-theme.md-hue-2 .md-toast-content .md-button.md-highlight.md-warn,
md-toast.md-hue-2 .md-toast-content .md-button.md-highlight.md-warn {
  color: rgb(39, 188, 234);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar).md-warn,
md-toolbar.md-hue-2:not(.md-menu-toolbar).md-warn {
  background-color: rgb(216, 67, 21);
  color: rgb(255, 255, 255);
}

.md-button.md-default-theme.md-hue-3.md-warn,
.md-button.md-hue-3.md-warn {
  color: rgb(255, 158, 128);
}

.md-button.md-default-theme.md-hue-3.md-warn.md-fab,
.md-button.md-hue-3.md-warn.md-fab,
.md-button.md-default-theme.md-hue-3.md-warn.md-raised,
.md-button.md-hue-3.md-warn.md-raised {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(0, 155, 203);
}

.md-button.md-default-theme.md-hue-3.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-hue-3.md-warn.md-fab:not([disabled]) md-icon,
.md-button.md-default-theme.md-hue-3.md-warn.md-raised:not([disabled]) md-icon,
.md-button.md-hue-3.md-warn.md-raised:not([disabled]) md-icon {
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-hue-3.md-warn.md-fab:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-warn.md-fab:not([disabled]):hover,
.md-button.md-hue-3.md-warn.md-fab:not([disabled]):hover,
.md-button.md-default-theme.md-hue-3.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-hue-3.md-warn.md-raised:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3.md-warn.md-raised:not([disabled]):hover,
.md-button.md-hue-3.md-warn.md-raised:not([disabled]):hover {
  background-color: rgb(244, 81, 30);
}

.md-button.md-default-theme.md-hue-3.md-warn:not([disabled]) md-icon,
.md-button.md-hue-3.md-warn:not([disabled]) md-icon {
  color: rgb(255, 158, 128);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-warn,
._md a.md-hue-3:not(.md-button).md-warn {
  color: rgb(255, 158, 128);
}

._md a.md-default-theme.md-hue-3:not(.md-button).md-warn:hover,
._md a.md-hue-3:not(.md-button).md-warn:hover {
  color: rgb(25, 181, 230);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn .md-ripple,
md-checkbox.md-hue-3:not([disabled]).md-warn .md-ripple {
  color: rgb(11, 174, 225);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn .md-ink-ripple,
md-checkbox.md-hue-3:not([disabled]).md-warn .md-ink-ripple {
  color: rgba(255, 255, 255, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-checkbox.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple {
  color: rgba(255, 158, 128, 0.87);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn:not(.md-checked) .md-icon,
md-checkbox.md-hue-3:not([disabled]).md-warn:not(.md-checked) .md-icon {
  border-color: rgba(0, 0, 0, 0.54);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-icon,
md-checkbox.md-hue-3:not([disabled]).md-warn.md-checked .md-icon {
  background-color: rgba(0, 155, 203, 0.87);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before,
md-checkbox.md-hue-3:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container::before {
  background-color: rgba(0, 155, 203, 0.26);
}

md-checkbox.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-icon::after,
md-checkbox.md-hue-3:not([disabled]).md-warn.md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

.md-default-theme.md-hue-3 .md-datepicker-input-container.md-datepicker-invalid,
.md-hue-3 .md-datepicker-input-container.md-datepicker-invalid,
.md-warn .md-default-theme.md-hue-3 .md-datepicker-input-container.md-datepicker-focused,
.md-warn .md-hue-3 .md-datepicker-input-container.md-datepicker-focused {
  border-bottom-color: rgb(221, 44, 0);
}

.md-default-theme.md-hue-3 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-hue-3 .md-datepicker-open.md-warn .md-datepicker-calendar-icon,
.md-warn .md-default-theme.md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon,
.md-warn .md-hue-3 .md-datepicker-open .md-datepicker-calendar-icon {
  color: rgb(34, 211, 255);
}

md-icon.md-default-theme.md-hue-3.md-warn,
md-icon.md-hue-3.md-warn {
  color: rgb(255, 158, 128);
}

md-input-container.md-default-theme.md-hue-3 label.md-required::after,
md-input-container.md-hue-3 label.md-required::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-3 .md-input-message-animation,
md-input-container.md-hue-3 .md-input-message-animation,
md-input-container.md-default-theme.md-hue-3 .md-input-messages-animation,
md-input-container.md-hue-3 .md-input-messages-animation {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn .md-input,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container.md-default-theme.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn md-icon,
md-input-container.md-hue-3:not(.md-input-invalid).md-input-focused.md-warn md-icon {
  color: rgb(34, 211, 255);
}

md-input-container.md-default-theme.md-hue-3.md-input-invalid .md-input,
md-input-container.md-hue-3.md-input-invalid .md-input {
  border-color: rgb(221, 44, 0);
}

md-input-container.md-default-theme.md-hue-3.md-input-invalid .md-char-counter,
md-input-container.md-hue-3.md-input-invalid .md-char-counter,
md-input-container.md-default-theme.md-hue-3.md-input-invalid .md-input-message-animation,
md-input-container.md-hue-3.md-input-invalid .md-input-message-animation,
md-input-container.md-default-theme.md-hue-3.md-input-invalid label,
md-input-container.md-hue-3.md-input-invalid label {
  color: rgb(34, 211, 255);
}

md-nav-bar.md-default-theme.md-hue-3.md-warn>.md-nav-bar,
md-nav-bar.md-hue-3.md-warn>.md-nav-bar {
  background-color: rgb(0, 155, 203);
}

md-nav-bar.md-default-theme.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button,
md-nav-bar.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-nav-bar.md-default-theme.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,
md-nav-bar.md-default-theme.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused,
md-nav-bar.md-hue-3.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar,
md-toolbar.md-warn>md-nav-bar.md-hue-3>.md-nav-bar {
  background-color: rgb(0, 155, 203);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button,
md-toolbar.md-warn>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-active,
md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-warn>md-nav-bar.md-default-theme.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused,
md-toolbar.md-warn>md-nav-bar.md-hue-3>.md-nav-bar .md-button._md-nav-button.md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-progress-linear.md-default-theme.md-hue-3.md-warn .md-container,
md-progress-linear.md-hue-3.md-warn .md-container {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-3.md-warn .md-bar,
md-progress-linear.md-hue-3.md-warn .md-bar {
  background-color: rgb(0, 155, 203);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-warn .md-bar1,
md-progress-linear.md-hue-3[md-mode="buffer"].md-warn .md-bar1 {
  background-color: rgb(0, 109, 143);
}

md-progress-linear.md-default-theme.md-hue-3[md-mode="buffer"].md-warn .md-dashed::before,
md-progress-linear.md-hue-3[md-mode="buffer"].md-warn .md-dashed::before {
  background-image: radial-gradient(rgb(0, 109, 143) 0px, rgb(0, 109, 143) 16%, rgba(0, 0, 0, 0) 42%);
  background-color: initial;
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn .md-on,
md-radio-button.md-hue-3:not([disabled]).md-warn .md-on,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-on,
md-radio-button.md-hue-3:not([disabled]) .md-warn .md-on,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn .md-on,
md-radio-group.md-hue-3:not([disabled]).md-warn .md-on,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-on,
md-radio-group.md-hue-3:not([disabled]) .md-warn .md-on {
  background-color: rgba(0, 155, 203, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]).md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]) .md-warn.md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]).md-warn .md-checked .md-off,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-checked .md-off,
md-radio-button.md-hue-3:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]).md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]) .md-warn.md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]).md-warn .md-checked .md-off,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-checked .md-off,
md-radio-group.md-hue-3:not([disabled]) .md-warn .md-checked .md-off {
  border-color: rgba(0, 155, 203, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]).md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-warn.md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]).md-warn .md-checked .md-ink-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-checked .md-ink-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-warn .md-checked .md-ink-ripple {
  color: rgba(255, 158, 128, 0.87);
}

md-radio-button.md-default-theme.md-hue-3:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-hue-3:not([disabled]).md-warn .md-container .md-ripple,
md-radio-button.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-button.md-hue-3:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-hue-3:not([disabled]).md-warn .md-container .md-ripple,
md-radio-group.md-default-theme.md-hue-3:not([disabled]) .md-warn .md-container .md-ripple,
md-radio-group.md-hue-3:not([disabled]) .md-warn .md-container .md-ripple {
  color: rgb(11, 174, 225);
}

md-radio-group.md-default-theme.md-hue-3.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-hue-3.md-focused:not(:empty) .md-checked.md-warn .md-container::before,
md-radio-group.md-default-theme.md-hue-3.md-focused:not(:empty).md-warn .md-checked .md-container::before,
md-radio-group.md-hue-3.md-focused:not(:empty).md-warn .md-checked .md-container::before {
  background-color: rgba(0, 155, 203, 0.26);
}

md-input-container md-select.md-default-theme.md-hue-3 .md-select-value span:first-child::after,
md-input-container md-select.md-hue-3 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-input-container.md-input-invalid md-select.md-default-theme.md-hue-3 .md-select-value,
md-input-container.md-input-invalid md-select.md-hue-3 .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-3 .md-select-value span:first-child::after,
md-select.md-hue-3 .md-select-value span:first-child::after {
  color: rgb(34, 211, 255);
}

md-select.md-default-theme.md-hue-3.ng-invalid.ng-touched .md-select-value,
md-select.md-hue-3.ng-invalid.ng-touched .md-select-value {
  color: rgb(34, 211, 255);
  border-bottom-color: rgb(221, 44, 0);
}

md-select.md-default-theme.md-hue-3:not([disabled]):focus.md-warn .md-select-value,
md-select.md-hue-3:not([disabled]):focus.md-warn .md-select-value {
  border-bottom-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-focus-ring,
md-slider.md-hue-3.md-warn .md-focus-ring {
  background-color: rgba(0, 142, 187, 0.38);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-track.md-track-fill,
md-slider.md-hue-3.md-warn .md-track.md-track-fill {
  background-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-thumb::after,
md-slider.md-hue-3.md-warn .md-thumb::after {
  border-color: rgb(0, 155, 203);
  background-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-sign,
md-slider.md-hue-3.md-warn .md-sign {
  background-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-sign::after,
md-slider.md-hue-3.md-warn .md-sign::after {
  border-top-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn[md-vertical] .md-sign::after,
md-slider.md-hue-3.md-warn[md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 155, 203);
}

md-slider.md-default-theme.md-hue-3.md-warn .md-thumb-text,
md-slider.md-hue-3.md-warn .md-thumb-text {
  color: rgba(255, 255, 255, 0.87);
}

.md-subheader.md-default-theme.md-hue-3.md-warn,
.md-subheader.md-hue-3.md-warn {
  color: rgb(255, 158, 128);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-warn .md-ink-ripple,
md-switch.md-hue-3.md-checked.md-warn .md-ink-ripple {
  color: rgb(255, 158, 128);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-warn .md-thumb,
md-switch.md-hue-3.md-checked.md-warn .md-thumb {
  background-color: rgb(0, 155, 203);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-warn .md-bar,
md-switch.md-hue-3.md-checked.md-warn .md-bar {
  background-color: rgba(0, 155, 203, 0.5);
}

md-switch.md-default-theme.md-hue-3.md-checked.md-warn.md-focused .md-thumb::before,
md-switch.md-hue-3.md-checked.md-warn.md-focused .md-thumb::before {
  background-color: rgba(0, 155, 203, 0.26);
}

md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper {
  background-color: rgb(0, 155, 203);
}

md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-tabs.md-default-theme.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-tabs.md-hue-3.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper {
  background-color: rgb(0, 155, 203);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon {
  color: rgb(255, 204, 188);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-toolbar.md-warn>md-tabs.md-default-theme.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,
md-toolbar.md-warn>md-tabs.md-hue-3>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

md-toast.md-default-theme.md-hue-3 .md-toast-content .md-button.md-highlight.md-warn,
md-toast.md-hue-3 .md-toast-content .md-button.md-highlight.md-warn {
  color: rgb(255, 158, 128);
}

md-toolbar.md-default-theme.md-hue-3:not(.md-menu-toolbar).md-warn,
md-toolbar.md-hue-3:not(.md-menu-toolbar).md-warn {
  background-color: rgb(0, 155, 203);
  color: rgba(255, 255, 255, 0.87);
}

md-autocomplete.md-default-theme,
md-autocomplete {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-autocomplete.md-default-theme[disabled]:not([md-floating-label]),
md-autocomplete[disabled]:not([md-floating-label]) {
  background-image: initial;
  background-color: rgb(48, 48, 48);
}

md-autocomplete.md-default-theme button::after,
md-autocomplete button::after {
  background-image: initial;
  background-color: rgba(117, 117, 117, 0.3);
}

.md-autocomplete-suggestions-container.md-default-theme,
.md-autocomplete-suggestions-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-autocomplete-suggestions-container.md-default-theme li.selected,
.md-autocomplete-suggestions-container li.selected,
.md-autocomplete-suggestions-container.md-default-theme li:hover,
.md-autocomplete-suggestions-container li:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.18);
}

md-backdrop {
  background-color: rgba(33, 33, 33, 0);
}

md-backdrop.md-opaque.md-default-theme,
md-backdrop.md-opaque {
  background-color: rgb(33, 33, 33);
}

md-bottom-sheet.md-default-theme,
md-bottom-sheet {
  background-color: rgb(43, 43, 43);
  border-top-color: rgb(69, 69, 69);
}

md-bottom-sheet.md-default-theme .md-subheader,
md-bottom-sheet .md-subheader {
  background-color: rgb(43, 43, 43);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme:not([disabled]).md-focused,
.md-button:not([disabled]).md-focused,
.md-button.md-default-theme:not([disabled]):hover,
.md-button:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.md-button.md-default-theme:not([disabled]).md-icon-button:hover,
.md-button:not([disabled]).md-icon-button:hover {
  background-color: rgba(0, 0, 0, 0);
}

.md-button.md-default-theme.md-raised,
.md-button.md-raised {
  color: rgb(222, 222, 222);
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-raised:not([disabled]) md-icon,
.md-button.md-raised:not([disabled]) md-icon {
  color: rgb(222, 222, 222);
}

.md-button.md-default-theme.md-raised:not([disabled]):hover,
.md-button.md-raised:not([disabled]):hover {
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-raised:not([disabled]).md-focused,
.md-button.md-raised:not([disabled]).md-focused {
  background-color: rgb(55, 55, 55);
}

.md-button.md-default-theme.md-fab[disabled],
.md-button.md-fab[disabled],
.md-button.md-default-theme.md-raised[disabled],
.md-button.md-raised[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
}

.md-button.md-default-theme[disabled],
.md-button[disabled] {
  background-color: rgba(0, 0, 0, 0);
}

md-card.md-default-theme,
md-card {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(38, 38, 38);
}

md-card.md-default-theme md-card-header md-card-avatar md-icon,
md-card md-card-header md-card-avatar md-icon {
  color: rgb(250, 250, 250);
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-checked .md-ripple,
md-checkbox.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme[disabled].md-checked .md-icon,
md-checkbox[disabled].md-checked .md-icon {
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme[disabled].md-checked .md-icon::after,
md-checkbox[disabled].md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

md-chips.md-default-theme md-chip,
md-chips md-chip {
  background-image: initial;
  background-color: rgb(69, 69, 69);
  color: rgb(189, 189, 189);
}

md-chips.md-default-theme md-chip md-icon,
md-chips md-chip md-icon {
  color: rgb(158, 158, 158);
}

md-chips.md-default-theme md-chip._md-chip-editing,
md-chips md-chip._md-chip-editing {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

.md-contact-suggestion span.md-contact-email {
  color: rgb(189, 189, 189);
}

md-content.md-default-theme,
md-content {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(43, 43, 43);
}

.md-calendar.md-default-theme,
.md-calendar {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar.md-default-theme tr:last-child td,
.md-calendar tr:last-child td {
  border-bottom-color: rgb(48, 48, 48);
}

.md-default-theme .md-calendar-day-header,
.md-calendar-day-header {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar-date.md-focus .md-default-theme .md-calendar-date-selection-indicator,
.md-calendar-date.md-focus .md-calendar-date-selection-indicator,
.md-default-theme .md-calendar-date-selection-indicator:hover,
.md-calendar-date-selection-indicator:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
}

.md-default-theme .md-datepicker-calendar-pane,
.md-datepicker-calendar-pane {
  border-color: rgb(38, 38, 38);
}

.md-default-theme .md-datepicker-calendar,
.md-datepicker-calendar {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-default-theme .md-datepicker-input-mask-opaque,
.md-datepicker-input-mask-opaque {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 9999px;
}

.md-default-theme .md-datepicker-open .md-datepicker-input-container,
.md-datepicker-open .md-datepicker-input-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-dialog.md-default-theme,
md-dialog {
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

[disabled] md-input-container.md-default-theme .md-input,
[disabled] md-input-container .md-input,
md-input-container.md-default-theme .md-input[disabled],
md-input-container .md-input[disabled] {
  border-bottom-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.38);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-list.md-default-theme .md-proxy-focus.md-focused div.md-no-style,
md-list .md-proxy-focus.md-focused div.md-no-style {
  background-color: rgb(48, 48, 48);
}

md-list.md-default-theme md-list-item .md-avatar-icon,
md-list md-list-item .md-avatar-icon {
  background-color: rgba(0, 0, 0, 0.38);
  color: rgb(250, 250, 250);
}

md-menu-content.md-default-theme,
md-menu-content {
  background-color: rgb(38, 38, 38);
}

md-menu-content.md-default-theme md-menu-divider,
md-menu-content md-menu-divider {
  background-color: rgba(0, 0, 0, 0.12);
}

md-menu-bar.md-default-theme md-menu.md-open>button,
md-menu-bar md-menu.md-open>button,
md-menu-bar.md-default-theme md-menu>button:focus,
md-menu-bar md-menu>button:focus {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

md-menu-bar.md-default-theme.md-open:not(.md-keyboard-mode) md-menu:hover>button,
md-menu-bar.md-open:not(.md-keyboard-mode) md-menu:hover>button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-menu-bar.md-default-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-default-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,
md-menu-bar:not(.md-keyboard-mode):not(.md-open) md-menu button:hover {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-menu-content.md-default-theme .md-menu>.md-button::after,
md-menu-content .md-menu>.md-button::after {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme .md-menu.md-open>.md-button,
md-menu-content .md-menu.md-open>.md-button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-toolbar.md-default-theme.md-menu-toolbar,
md-toolbar.md-menu-toolbar {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

md-toolbar.md-default-theme.md-menu-toolbar md-toolbar-filler md-icon,
md-toolbar.md-menu-toolbar md-toolbar-filler md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme .md-nav-bar,
md-nav-bar .md-nav-bar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

._md-panel-backdrop.md-default-theme,
._md-panel-backdrop {
  background-color: rgb(33, 33, 33);
}

md-select.md-default-theme[disabled] .md-select-value,
md-select[disabled] .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-select-menu.md-default-theme md-content,
md-select-menu md-content {
  background-color: rgb(38, 38, 38);
}

md-select-menu.md-default-theme md-content md-option:not([disabled]):focus,
md-select-menu md-content md-option:not([disabled]):focus,
md-select-menu.md-default-theme md-content md-option:not([disabled]):hover,
md-select-menu md-content md-option:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.18);
}

.md-checkbox-enabled.md-default-theme[selected] .md-ripple,
.md-checkbox-enabled[selected] .md-ripple {
  color: rgb(138, 138, 138);
}

md-sidenav.md-default-theme,
md-sidenav,
md-sidenav.md-default-theme md-content,
md-sidenav md-content {
  background-color: rgb(38, 38, 38);
}

md-slider.md-default-theme .md-track,
md-slider .md-track {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme .md-track-ticks,
md-slider .md-track-ticks {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme .md-disabled-thumb,
md-slider .md-disabled-thumb {
  border-color: rgb(43, 43, 43);
  background-color: rgb(43, 43, 43);
}

md-slider.md-default-theme.md-min .md-thumb::after,
md-slider.md-min .md-thumb::after {
  background-color: rgb(43, 43, 43);
  border-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-min .md-focus-ring,
md-slider.md-min .md-focus-ring {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-min[md-discrete] .md-thumb::after,
md-slider.md-min[md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-min[md-discrete] .md-sign,
md-slider.md-min[md-discrete] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-min[md-discrete] .md-sign::after,
md-slider.md-min[md-discrete] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-min[md-discrete][md-vertical] .md-sign::after,
md-slider.md-min[md-discrete][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme[disabled]:not(.md-min) .md-thumb::after,
md-slider[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-default-theme[disabled][md-discrete] .md-thumb::after,
md-slider[disabled][md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.38);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme[disabled][readonly] .md-sign,
md-slider[disabled][readonly] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme[disabled][readonly] .md-sign::after,
md-slider[disabled][readonly] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme[disabled][readonly][md-vertical] .md-sign::after,
md-slider[disabled][readonly][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme[disabled][readonly] .md-disabled-thumb,
md-slider[disabled][readonly] .md-disabled-thumb {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.md-subheader.md-default-theme,
.md-subheader {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme .md-ink-ripple,
md-switch .md-ink-ripple {
  color: rgb(158, 158, 158);
}

md-switch.md-default-theme .md-thumb,
md-switch .md-thumb {
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme .md-bar,
md-switch .md-bar {
  background-color: rgb(135, 135, 135);
}

md-switch.md-default-theme[disabled] .md-thumb,
md-switch[disabled] .md-thumb {
  background-color: rgb(104, 104, 104);
}

md-switch.md-default-theme[disabled] .md-bar,
md-switch[disabled] .md-bar {
  background-color: rgba(0, 0, 0, 0.12);
}

md-tabs.md-default-theme md-tabs-wrapper,
md-tabs md-tabs-wrapper {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

md-toast.md-default-theme .md-toast-content,
md-toast .md-toast-content {
  background-color: rgb(50, 50, 50);
  color: rgb(250, 250, 250);
}

md-toast.md-default-theme .md-toast-content .md-button,
md-toast .md-toast-content .md-button {
  color: rgb(250, 250, 250);
}

.md-panel.md-tooltip.md-default-theme,
.md-panel.md-tooltip {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(97, 97, 97);
}

body.md-default-theme,
body,
html.md-default-theme,
html {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(43, 43, 43);
}

md-autocomplete.md-default-theme.md-hue-1,
md-autocomplete.md-hue-1 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-autocomplete.md-default-theme.md-hue-1[disabled]:not([md-floating-label]),
md-autocomplete.md-hue-1[disabled]:not([md-floating-label]) {
  background-image: initial;
  background-color: rgb(48, 48, 48);
}

md-autocomplete.md-default-theme.md-hue-1 button::after,
md-autocomplete.md-hue-1 button::after {
  background-image: initial;
  background-color: rgba(117, 117, 117, 0.3);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-1,
.md-autocomplete-suggestions-container.md-hue-1 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-1 li.selected,
.md-autocomplete-suggestions-container.md-hue-1 li.selected,
.md-autocomplete-suggestions-container.md-default-theme.md-hue-1 li:hover,
.md-autocomplete-suggestions-container.md-hue-1 li:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.18);
}

md-backdrop {
  background-color: rgba(33, 33, 33, 0);
}

md-backdrop.md-opaque.md-default-theme.md-hue-1,
md-backdrop.md-opaque.md-hue-1 {
  background-color: rgb(33, 33, 33);
}

md-bottom-sheet.md-default-theme.md-hue-1,
md-bottom-sheet.md-hue-1 {
  background-color: rgb(43, 43, 43);
  border-top-color: rgb(69, 69, 69);
}

md-bottom-sheet.md-default-theme.md-hue-1 .md-subheader,
md-bottom-sheet.md-hue-1 .md-subheader {
  background-color: rgb(43, 43, 43);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-1:not([disabled]).md-focused,
.md-button.md-hue-1:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-1:not([disabled]):hover,
.md-button.md-hue-1:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.md-button.md-default-theme.md-hue-1:not([disabled]).md-icon-button:hover,
.md-button.md-hue-1:not([disabled]).md-icon-button:hover {
  background-color: rgba(0, 0, 0, 0);
}

.md-button.md-default-theme.md-hue-1.md-raised,
.md-button.md-hue-1.md-raised {
  color: rgb(222, 222, 222);
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-1.md-raised:not([disabled]) md-icon,
.md-button.md-hue-1.md-raised:not([disabled]) md-icon {
  color: rgb(222, 222, 222);
}

.md-button.md-default-theme.md-hue-1.md-raised:not([disabled]):hover,
.md-button.md-hue-1.md-raised:not([disabled]):hover {
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-1.md-raised:not([disabled]).md-focused,
.md-button.md-hue-1.md-raised:not([disabled]).md-focused {
  background-color: rgb(55, 55, 55);
}

.md-button.md-default-theme.md-hue-1.md-fab[disabled],
.md-button.md-hue-1.md-fab[disabled],
.md-button.md-default-theme.md-hue-1.md-raised[disabled],
.md-button.md-hue-1.md-raised[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
}

.md-button.md-default-theme.md-hue-1[disabled],
.md-button.md-hue-1[disabled] {
  background-color: rgba(0, 0, 0, 0);
}

md-card.md-default-theme.md-hue-1,
md-card.md-hue-1 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(38, 38, 38);
}

md-card.md-default-theme.md-hue-1 md-card-header md-card-avatar md-icon,
md-card.md-hue-1 md-card-header md-card-avatar md-icon {
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-1.md-checked .md-ripple,
md-checkbox.md-hue-1.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-1[disabled].md-checked .md-icon,
md-checkbox.md-hue-1[disabled].md-checked .md-icon {
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-1[disabled].md-checked .md-icon::after,
md-checkbox.md-hue-1[disabled].md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

md-chips.md-default-theme.md-hue-1 md-chip,
md-chips.md-hue-1 md-chip {
  background-image: initial;
  background-color: rgb(69, 69, 69);
  color: rgb(189, 189, 189);
}

md-chips.md-default-theme.md-hue-1 md-chip md-icon,
md-chips.md-hue-1 md-chip md-icon {
  color: rgb(158, 158, 158);
}

md-chips.md-default-theme.md-hue-1 md-chip._md-chip-editing,
md-chips.md-hue-1 md-chip._md-chip-editing {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

.md-contact-suggestion span.md-contact-email {
  color: rgb(189, 189, 189);
}

md-content.md-default-theme.md-hue-1,
md-content.md-hue-1 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(43, 43, 43);
}

.md-calendar.md-default-theme.md-hue-1,
.md-calendar.md-hue-1 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar.md-default-theme.md-hue-1 tr:last-child td,
.md-calendar.md-hue-1 tr:last-child td {
  border-bottom-color: rgb(48, 48, 48);
}

.md-default-theme.md-hue-1 .md-calendar-day-header,
.md-hue-1 .md-calendar-day-header {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar-date.md-focus .md-default-theme.md-hue-1 .md-calendar-date-selection-indicator,
.md-calendar-date.md-focus .md-hue-1 .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-1 .md-calendar-date-selection-indicator:hover,
.md-hue-1 .md-calendar-date-selection-indicator:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
}

.md-default-theme.md-hue-1 .md-datepicker-calendar-pane,
.md-hue-1 .md-datepicker-calendar-pane {
  border-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-1 .md-datepicker-calendar,
.md-hue-1 .md-datepicker-calendar {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-1 .md-datepicker-input-mask-opaque,
.md-hue-1 .md-datepicker-input-mask-opaque {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 9999px;
}

.md-default-theme.md-hue-1 .md-datepicker-open .md-datepicker-input-container,
.md-hue-1 .md-datepicker-open .md-datepicker-input-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-dialog.md-default-theme.md-hue-1,
md-dialog.md-hue-1 {
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

[disabled] md-input-container.md-default-theme.md-hue-1 .md-input,
[disabled] md-input-container.md-hue-1 .md-input,
md-input-container.md-default-theme.md-hue-1 .md-input[disabled],
md-input-container.md-hue-1 .md-input[disabled] {
  border-bottom-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.38);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-list.md-default-theme.md-hue-1 .md-proxy-focus.md-focused div.md-no-style,
md-list.md-hue-1 .md-proxy-focus.md-focused div.md-no-style {
  background-color: rgb(48, 48, 48);
}

md-list.md-default-theme.md-hue-1 md-list-item .md-avatar-icon,
md-list.md-hue-1 md-list-item .md-avatar-icon {
  background-color: rgba(0, 0, 0, 0.38);
  color: rgb(255, 255, 255);
}

md-menu-content.md-default-theme.md-hue-1,
md-menu-content.md-hue-1 {
  background-color: rgb(38, 38, 38);
}

md-menu-content.md-default-theme.md-hue-1 md-menu-divider,
md-menu-content.md-hue-1 md-menu-divider {
  background-color: rgba(0, 0, 0, 0.12);
}

md-menu-bar.md-default-theme.md-hue-1 md-menu.md-open>button,
md-menu-bar.md-hue-1 md-menu.md-open>button,
md-menu-bar.md-default-theme.md-hue-1 md-menu>button:focus,
md-menu-bar.md-hue-1 md-menu>button:focus {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

md-menu-bar.md-default-theme.md-hue-1.md-open:not(.md-keyboard-mode) md-menu:hover>button,
md-menu-bar.md-hue-1.md-open:not(.md-keyboard-mode) md-menu:hover>button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-menu-bar.md-default-theme.md-hue-1:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-hue-1:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-default-theme.md-hue-1:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,
md-menu-bar.md-hue-1:not(.md-keyboard-mode):not(.md-open) md-menu button:hover {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-menu-content.md-default-theme.md-hue-1 .md-menu>.md-button::after,
md-menu-content.md-hue-1 .md-menu>.md-button::after {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-1 .md-menu.md-open>.md-button,
md-menu-content.md-hue-1 .md-menu.md-open>.md-button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-toolbar.md-default-theme.md-hue-1.md-menu-toolbar,
md-toolbar.md-hue-1.md-menu-toolbar {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

md-toolbar.md-default-theme.md-hue-1.md-menu-toolbar md-toolbar-filler md-icon,
md-toolbar.md-hue-1.md-menu-toolbar md-toolbar-filler md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-1 .md-nav-bar,
md-nav-bar.md-hue-1 .md-nav-bar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

._md-panel-backdrop.md-default-theme.md-hue-1,
._md-panel-backdrop.md-hue-1 {
  background-color: rgb(33, 33, 33);
}

md-select.md-default-theme.md-hue-1[disabled] .md-select-value,
md-select.md-hue-1[disabled] .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-select-menu.md-default-theme.md-hue-1 md-content,
md-select-menu.md-hue-1 md-content {
  background-color: rgb(38, 38, 38);
}

md-select-menu.md-default-theme.md-hue-1 md-content md-option:not([disabled]):focus,
md-select-menu.md-hue-1 md-content md-option:not([disabled]):focus,
md-select-menu.md-default-theme.md-hue-1 md-content md-option:not([disabled]):hover,
md-select-menu.md-hue-1 md-content md-option:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.18);
}

.md-checkbox-enabled.md-default-theme.md-hue-1[selected] .md-ripple,
.md-checkbox-enabled.md-hue-1[selected] .md-ripple {
  color: rgb(138, 138, 138);
}

md-sidenav.md-default-theme.md-hue-1,
md-sidenav.md-hue-1,
md-sidenav.md-default-theme.md-hue-1 md-content,
md-sidenav.md-hue-1 md-content {
  background-color: rgb(38, 38, 38);
}

md-slider.md-default-theme.md-hue-1 .md-track,
md-slider.md-hue-1 .md-track {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-1 .md-track-ticks,
md-slider.md-hue-1 .md-track-ticks {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-1 .md-disabled-thumb,
md-slider.md-hue-1 .md-disabled-thumb {
  border-color: rgb(38, 38, 38);
  background-color: rgb(38, 38, 38);
}

md-slider.md-default-theme.md-hue-1.md-min .md-thumb::after,
md-slider.md-hue-1.md-min .md-thumb::after {
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-1.md-min .md-focus-ring,
md-slider.md-hue-1.md-min .md-focus-ring {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-1.md-min[md-discrete] .md-thumb::after,
md-slider.md-hue-1.md-min[md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-1.md-min[md-discrete] .md-sign,
md-slider.md-hue-1.md-min[md-discrete] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1.md-min[md-discrete] .md-sign::after,
md-slider.md-hue-1.md-min[md-discrete] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1.md-min[md-discrete][md-vertical] .md-sign::after,
md-slider.md-hue-1.md-min[md-discrete][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-hue-1[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-default-theme.md-hue-1[disabled][md-discrete] .md-thumb::after,
md-slider.md-hue-1[disabled][md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.38);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-1[disabled][readonly] .md-sign,
md-slider.md-hue-1[disabled][readonly] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1[disabled][readonly] .md-sign::after,
md-slider.md-hue-1[disabled][readonly] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1[disabled][readonly][md-vertical] .md-sign::after,
md-slider.md-hue-1[disabled][readonly][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-1[disabled][readonly] .md-disabled-thumb,
md-slider.md-hue-1[disabled][readonly] .md-disabled-thumb {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.md-subheader.md-default-theme.md-hue-1,
.md-subheader.md-hue-1 {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-1 .md-ink-ripple,
md-switch.md-hue-1 .md-ink-ripple {
  color: rgb(158, 158, 158);
}

md-switch.md-default-theme.md-hue-1 .md-thumb,
md-switch.md-hue-1 .md-thumb {
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-1 .md-bar,
md-switch.md-hue-1 .md-bar {
  background-color: rgb(135, 135, 135);
}

md-switch.md-default-theme.md-hue-1[disabled] .md-thumb,
md-switch.md-hue-1[disabled] .md-thumb {
  background-color: rgb(104, 104, 104);
}

md-switch.md-default-theme.md-hue-1[disabled] .md-bar,
md-switch.md-hue-1[disabled] .md-bar {
  background-color: rgba(0, 0, 0, 0.12);
}

md-tabs.md-default-theme.md-hue-1 md-tabs-wrapper,
md-tabs.md-hue-1 md-tabs-wrapper {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

md-toast.md-default-theme.md-hue-1 .md-toast-content,
md-toast.md-hue-1 .md-toast-content {
  background-color: rgb(50, 50, 50);
  color: rgb(250, 250, 250);
}

md-toast.md-default-theme.md-hue-1 .md-toast-content .md-button,
md-toast.md-hue-1 .md-toast-content .md-button {
  color: rgb(250, 250, 250);
}

.md-panel.md-tooltip.md-default-theme.md-hue-1,
.md-panel.md-tooltip.md-hue-1 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(97, 97, 97);
}

body.md-default-theme.md-hue-1,
body.md-hue-1,
html.md-default-theme.md-hue-1,
html.md-hue-1 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(38, 38, 38);
}

md-autocomplete.md-default-theme.md-hue-2,
md-autocomplete.md-hue-2 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-autocomplete.md-default-theme.md-hue-2[disabled]:not([md-floating-label]),
md-autocomplete.md-hue-2[disabled]:not([md-floating-label]) {
  background-image: initial;
  background-color: rgb(48, 48, 48);
}

md-autocomplete.md-default-theme.md-hue-2 button::after,
md-autocomplete.md-hue-2 button::after {
  background-image: initial;
  background-color: rgba(117, 117, 117, 0.3);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-2,
.md-autocomplete-suggestions-container.md-hue-2 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-2 li.selected,
.md-autocomplete-suggestions-container.md-hue-2 li.selected,
.md-autocomplete-suggestions-container.md-default-theme.md-hue-2 li:hover,
.md-autocomplete-suggestions-container.md-hue-2 li:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.18);
}

md-backdrop {
  background-color: rgba(33, 33, 33, 0);
}

md-backdrop.md-opaque.md-default-theme.md-hue-2,
md-backdrop.md-opaque.md-hue-2 {
  background-color: rgb(33, 33, 33);
}

md-bottom-sheet.md-default-theme.md-hue-2,
md-bottom-sheet.md-hue-2 {
  background-color: rgb(43, 43, 43);
  border-top-color: rgb(69, 69, 69);
}

md-bottom-sheet.md-default-theme.md-hue-2 .md-subheader,
md-bottom-sheet.md-hue-2 .md-subheader {
  background-color: rgb(43, 43, 43);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-2:not([disabled]).md-focused,
.md-button.md-hue-2:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-2:not([disabled]):hover,
.md-button.md-hue-2:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.md-button.md-default-theme.md-hue-2:not([disabled]).md-icon-button:hover,
.md-button.md-hue-2:not([disabled]).md-icon-button:hover {
  background-color: rgba(0, 0, 0, 0);
}

.md-button.md-default-theme.md-hue-2.md-raised,
.md-button.md-hue-2.md-raised {
  color: rgb(222, 222, 222);
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-2.md-raised:not([disabled]) md-icon,
.md-button.md-hue-2.md-raised:not([disabled]) md-icon {
  color: rgb(222, 222, 222);
}

.md-button.md-default-theme.md-hue-2.md-raised:not([disabled]):hover,
.md-button.md-hue-2.md-raised:not([disabled]):hover {
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-2.md-raised:not([disabled]).md-focused,
.md-button.md-hue-2.md-raised:not([disabled]).md-focused {
  background-color: rgb(55, 55, 55);
}

.md-button.md-default-theme.md-hue-2.md-fab[disabled],
.md-button.md-hue-2.md-fab[disabled],
.md-button.md-default-theme.md-hue-2.md-raised[disabled],
.md-button.md-hue-2.md-raised[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
}

.md-button.md-default-theme.md-hue-2[disabled],
.md-button.md-hue-2[disabled] {
  background-color: rgba(0, 0, 0, 0);
}

md-card.md-default-theme.md-hue-2,
md-card.md-hue-2 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(38, 38, 38);
}

md-card.md-default-theme.md-hue-2 md-card-header md-card-avatar md-icon,
md-card.md-hue-2 md-card-header md-card-avatar md-icon {
  color: rgb(245, 245, 245);
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-2.md-checked .md-ripple,
md-checkbox.md-hue-2.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-2[disabled].md-checked .md-icon,
md-checkbox.md-hue-2[disabled].md-checked .md-icon {
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-2[disabled].md-checked .md-icon::after,
md-checkbox.md-hue-2[disabled].md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

md-chips.md-default-theme.md-hue-2 md-chip,
md-chips.md-hue-2 md-chip {
  background-image: initial;
  background-color: rgb(69, 69, 69);
  color: rgb(189, 189, 189);
}

md-chips.md-default-theme.md-hue-2 md-chip md-icon,
md-chips.md-hue-2 md-chip md-icon {
  color: rgb(158, 158, 158);
}

md-chips.md-default-theme.md-hue-2 md-chip._md-chip-editing,
md-chips.md-hue-2 md-chip._md-chip-editing {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

.md-contact-suggestion span.md-contact-email {
  color: rgb(189, 189, 189);
}

md-content.md-default-theme.md-hue-2,
md-content.md-hue-2 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(43, 43, 43);
}

.md-calendar.md-default-theme.md-hue-2,
.md-calendar.md-hue-2 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar.md-default-theme.md-hue-2 tr:last-child td,
.md-calendar.md-hue-2 tr:last-child td {
  border-bottom-color: rgb(48, 48, 48);
}

.md-default-theme.md-hue-2 .md-calendar-day-header,
.md-hue-2 .md-calendar-day-header {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar-date.md-focus .md-default-theme.md-hue-2 .md-calendar-date-selection-indicator,
.md-calendar-date.md-focus .md-hue-2 .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-2 .md-calendar-date-selection-indicator:hover,
.md-hue-2 .md-calendar-date-selection-indicator:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
}

.md-default-theme.md-hue-2 .md-datepicker-calendar-pane,
.md-hue-2 .md-datepicker-calendar-pane {
  border-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-2 .md-datepicker-calendar,
.md-hue-2 .md-datepicker-calendar {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-2 .md-datepicker-input-mask-opaque,
.md-hue-2 .md-datepicker-input-mask-opaque {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 9999px;
}

.md-default-theme.md-hue-2 .md-datepicker-open .md-datepicker-input-container,
.md-hue-2 .md-datepicker-open .md-datepicker-input-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-dialog.md-default-theme.md-hue-2,
md-dialog.md-hue-2 {
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

[disabled] md-input-container.md-default-theme.md-hue-2 .md-input,
[disabled] md-input-container.md-hue-2 .md-input,
md-input-container.md-default-theme.md-hue-2 .md-input[disabled],
md-input-container.md-hue-2 .md-input[disabled] {
  border-bottom-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.38);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-list.md-default-theme.md-hue-2 .md-proxy-focus.md-focused div.md-no-style,
md-list.md-hue-2 .md-proxy-focus.md-focused div.md-no-style {
  background-color: rgb(48, 48, 48);
}

md-list.md-default-theme.md-hue-2 md-list-item .md-avatar-icon,
md-list.md-hue-2 md-list-item .md-avatar-icon {
  background-color: rgba(0, 0, 0, 0.38);
  color: rgb(245, 245, 245);
}

md-menu-content.md-default-theme.md-hue-2,
md-menu-content.md-hue-2 {
  background-color: rgb(38, 38, 38);
}

md-menu-content.md-default-theme.md-hue-2 md-menu-divider,
md-menu-content.md-hue-2 md-menu-divider {
  background-color: rgba(0, 0, 0, 0.12);
}

md-menu-bar.md-default-theme.md-hue-2 md-menu.md-open>button,
md-menu-bar.md-hue-2 md-menu.md-open>button,
md-menu-bar.md-default-theme.md-hue-2 md-menu>button:focus,
md-menu-bar.md-hue-2 md-menu>button:focus {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

md-menu-bar.md-default-theme.md-hue-2.md-open:not(.md-keyboard-mode) md-menu:hover>button,
md-menu-bar.md-hue-2.md-open:not(.md-keyboard-mode) md-menu:hover>button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-menu-bar.md-default-theme.md-hue-2:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-hue-2:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-default-theme.md-hue-2:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,
md-menu-bar.md-hue-2:not(.md-keyboard-mode):not(.md-open) md-menu button:hover {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-menu-content.md-default-theme.md-hue-2 .md-menu>.md-button::after,
md-menu-content.md-hue-2 .md-menu>.md-button::after {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-2 .md-menu.md-open>.md-button,
md-menu-content.md-hue-2 .md-menu.md-open>.md-button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-toolbar.md-default-theme.md-hue-2.md-menu-toolbar,
md-toolbar.md-hue-2.md-menu-toolbar {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

md-toolbar.md-default-theme.md-hue-2.md-menu-toolbar md-toolbar-filler md-icon,
md-toolbar.md-hue-2.md-menu-toolbar md-toolbar-filler md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-2 .md-nav-bar,
md-nav-bar.md-hue-2 .md-nav-bar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

._md-panel-backdrop.md-default-theme.md-hue-2,
._md-panel-backdrop.md-hue-2 {
  background-color: rgb(33, 33, 33);
}

md-select.md-default-theme.md-hue-2[disabled] .md-select-value,
md-select.md-hue-2[disabled] .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-select-menu.md-default-theme.md-hue-2 md-content,
md-select-menu.md-hue-2 md-content {
  background-color: rgb(38, 38, 38);
}

md-select-menu.md-default-theme.md-hue-2 md-content md-option:not([disabled]):focus,
md-select-menu.md-hue-2 md-content md-option:not([disabled]):focus,
md-select-menu.md-default-theme.md-hue-2 md-content md-option:not([disabled]):hover,
md-select-menu.md-hue-2 md-content md-option:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.18);
}

.md-checkbox-enabled.md-default-theme.md-hue-2[selected] .md-ripple,
.md-checkbox-enabled.md-hue-2[selected] .md-ripple {
  color: rgb(138, 138, 138);
}

md-sidenav.md-default-theme.md-hue-2,
md-sidenav.md-hue-2,
md-sidenav.md-default-theme.md-hue-2 md-content,
md-sidenav.md-hue-2 md-content {
  background-color: rgb(38, 38, 38);
}

md-slider.md-default-theme.md-hue-2 .md-track,
md-slider.md-hue-2 .md-track {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-2 .md-track-ticks,
md-slider.md-hue-2 .md-track-ticks {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-2 .md-disabled-thumb,
md-slider.md-hue-2 .md-disabled-thumb {
  border-color: rgb(48, 48, 48);
  background-color: rgb(48, 48, 48);
}

md-slider.md-default-theme.md-hue-2.md-min .md-thumb::after,
md-slider.md-hue-2.md-min .md-thumb::after {
  background-color: rgb(48, 48, 48);
  border-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-2.md-min .md-focus-ring,
md-slider.md-hue-2.md-min .md-focus-ring {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-2.md-min[md-discrete] .md-thumb::after,
md-slider.md-hue-2.md-min[md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-2.md-min[md-discrete] .md-sign,
md-slider.md-hue-2.md-min[md-discrete] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2.md-min[md-discrete] .md-sign::after,
md-slider.md-hue-2.md-min[md-discrete] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2.md-min[md-discrete][md-vertical] .md-sign::after,
md-slider.md-hue-2.md-min[md-discrete][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-hue-2[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-default-theme.md-hue-2[disabled][md-discrete] .md-thumb::after,
md-slider.md-hue-2[disabled][md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.38);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-2[disabled][readonly] .md-sign,
md-slider.md-hue-2[disabled][readonly] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2[disabled][readonly] .md-sign::after,
md-slider.md-hue-2[disabled][readonly] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2[disabled][readonly][md-vertical] .md-sign::after,
md-slider.md-hue-2[disabled][readonly][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-2[disabled][readonly] .md-disabled-thumb,
md-slider.md-hue-2[disabled][readonly] .md-disabled-thumb {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.md-subheader.md-default-theme.md-hue-2,
.md-subheader.md-hue-2 {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-2 .md-ink-ripple,
md-switch.md-hue-2 .md-ink-ripple {
  color: rgb(158, 158, 158);
}

md-switch.md-default-theme.md-hue-2 .md-thumb,
md-switch.md-hue-2 .md-thumb {
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-2 .md-bar,
md-switch.md-hue-2 .md-bar {
  background-color: rgb(135, 135, 135);
}

md-switch.md-default-theme.md-hue-2[disabled] .md-thumb,
md-switch.md-hue-2[disabled] .md-thumb {
  background-color: rgb(104, 104, 104);
}

md-switch.md-default-theme.md-hue-2[disabled] .md-bar,
md-switch.md-hue-2[disabled] .md-bar {
  background-color: rgba(0, 0, 0, 0.12);
}

md-tabs.md-default-theme.md-hue-2 md-tabs-wrapper,
md-tabs.md-hue-2 md-tabs-wrapper {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

md-toast.md-default-theme.md-hue-2 .md-toast-content,
md-toast.md-hue-2 .md-toast-content {
  background-color: rgb(50, 50, 50);
  color: rgb(250, 250, 250);
}

md-toast.md-default-theme.md-hue-2 .md-toast-content .md-button,
md-toast.md-hue-2 .md-toast-content .md-button {
  color: rgb(250, 250, 250);
}

.md-panel.md-tooltip.md-default-theme.md-hue-2,
.md-panel.md-tooltip.md-hue-2 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(97, 97, 97);
}

body.md-default-theme.md-hue-2,
body.md-hue-2,
html.md-default-theme.md-hue-2,
html.md-hue-2 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(48, 48, 48);
}

md-autocomplete.md-default-theme.md-hue-3,
md-autocomplete.md-hue-3 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-autocomplete.md-default-theme.md-hue-3[disabled]:not([md-floating-label]),
md-autocomplete.md-hue-3[disabled]:not([md-floating-label]) {
  background-image: initial;
  background-color: rgb(48, 48, 48);
}

md-autocomplete.md-default-theme.md-hue-3 button::after,
md-autocomplete.md-hue-3 button::after {
  background-image: initial;
  background-color: rgba(117, 117, 117, 0.3);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-3,
.md-autocomplete-suggestions-container.md-hue-3 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-autocomplete-suggestions-container.md-default-theme.md-hue-3 li.selected,
.md-autocomplete-suggestions-container.md-hue-3 li.selected,
.md-autocomplete-suggestions-container.md-default-theme.md-hue-3 li:hover,
.md-autocomplete-suggestions-container.md-hue-3 li:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.18);
}

md-backdrop {
  background-color: rgba(33, 33, 33, 0);
}

md-backdrop.md-opaque.md-default-theme.md-hue-3,
md-backdrop.md-opaque.md-hue-3 {
  background-color: rgb(33, 33, 33);
}

md-bottom-sheet.md-default-theme.md-hue-3,
md-bottom-sheet.md-hue-3 {
  background-color: rgb(43, 43, 43);
  border-top-color: rgb(69, 69, 69);
}

md-bottom-sheet.md-default-theme.md-hue-3 .md-subheader,
md-bottom-sheet.md-hue-3 .md-subheader {
  background-color: rgb(43, 43, 43);
  color: rgba(255, 255, 255, 0.87);
}

.md-button.md-default-theme.md-hue-3:not([disabled]).md-focused,
.md-button.md-hue-3:not([disabled]).md-focused,
.md-button.md-default-theme.md-hue-3:not([disabled]):hover,
.md-button.md-hue-3:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.md-button.md-default-theme.md-hue-3:not([disabled]).md-icon-button:hover,
.md-button.md-hue-3:not([disabled]).md-icon-button:hover {
  background-color: rgba(0, 0, 0, 0);
}

.md-button.md-default-theme.md-hue-3.md-raised,
.md-button.md-hue-3.md-raised {
  color: rgb(222, 222, 222);
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-3.md-raised:not([disabled]) md-icon,
.md-button.md-hue-3.md-raised:not([disabled]) md-icon {
  color: rgb(222, 222, 222);
}

.md-button.md-default-theme.md-hue-3.md-raised:not([disabled]):hover,
.md-button.md-hue-3.md-raised:not([disabled]):hover {
  background-color: rgb(43, 43, 43);
}

.md-button.md-default-theme.md-hue-3.md-raised:not([disabled]).md-focused,
.md-button.md-hue-3.md-raised:not([disabled]).md-focused {
  background-color: rgb(55, 55, 55);
}

.md-button.md-default-theme.md-hue-3.md-fab[disabled],
.md-button.md-hue-3.md-fab[disabled],
.md-button.md-default-theme.md-hue-3.md-raised[disabled],
.md-button.md-hue-3.md-raised[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
}

.md-button.md-default-theme.md-hue-3[disabled],
.md-button.md-hue-3[disabled] {
  background-color: rgba(0, 0, 0, 0);
}

md-card.md-default-theme.md-hue-3,
md-card.md-hue-3 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(38, 38, 38);
}

md-card.md-default-theme.md-hue-3 md-card-header md-card-avatar md-icon,
md-card.md-hue-3 md-card-header md-card-avatar md-icon {
  color: rgb(224, 224, 224);
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-3.md-checked .md-ripple,
md-checkbox.md-hue-3.md-checked .md-ripple {
  color: rgb(138, 138, 138);
}

md-checkbox.md-default-theme.md-hue-3[disabled].md-checked .md-icon,
md-checkbox.md-hue-3[disabled].md-checked .md-icon {
  background-color: rgba(0, 0, 0, 0.38);
}

md-checkbox.md-default-theme.md-hue-3[disabled].md-checked .md-icon::after,
md-checkbox.md-hue-3[disabled].md-checked .md-icon::after {
  border-color: rgb(55, 55, 55);
}

md-chips.md-default-theme.md-hue-3 md-chip,
md-chips.md-hue-3 md-chip {
  background-image: initial;
  background-color: rgb(69, 69, 69);
  color: rgb(189, 189, 189);
}

md-chips.md-default-theme.md-hue-3 md-chip md-icon,
md-chips.md-hue-3 md-chip md-icon {
  color: rgb(158, 158, 158);
}

md-chips.md-default-theme.md-hue-3 md-chip._md-chip-editing,
md-chips.md-hue-3 md-chip._md-chip-editing {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

.md-contact-suggestion span.md-contact-email {
  color: rgb(189, 189, 189);
}

md-content.md-default-theme.md-hue-3,
md-content.md-hue-3 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(43, 43, 43);
}

.md-calendar.md-default-theme.md-hue-3,
.md-calendar.md-hue-3 {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar.md-default-theme.md-hue-3 tr:last-child td,
.md-calendar.md-hue-3 tr:last-child td {
  border-bottom-color: rgb(48, 48, 48);
}

.md-default-theme.md-hue-3 .md-calendar-day-header,
.md-hue-3 .md-calendar-day-header {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
  color: rgba(255, 255, 255, 0.87);
}

.md-calendar-date.md-focus .md-default-theme.md-hue-3 .md-calendar-date-selection-indicator,
.md-calendar-date.md-focus .md-hue-3 .md-calendar-date-selection-indicator,
.md-default-theme.md-hue-3 .md-calendar-date-selection-indicator:hover,
.md-hue-3 .md-calendar-date-selection-indicator:hover {
  background-image: initial;
  background-color: rgba(135, 135, 135, 0.32);
}

.md-default-theme.md-hue-3 .md-datepicker-calendar-pane,
.md-hue-3 .md-datepicker-calendar-pane {
  border-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-3 .md-datepicker-calendar,
.md-hue-3 .md-datepicker-calendar {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.md-default-theme.md-hue-3 .md-datepicker-input-mask-opaque,
.md-hue-3 .md-datepicker-input-mask-opaque {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 9999px;
}

.md-default-theme.md-hue-3 .md-datepicker-open .md-datepicker-input-container,
.md-hue-3 .md-datepicker-open .md-datepicker-input-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

md-dialog.md-default-theme.md-hue-3,
md-dialog.md-hue-3 {
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.87);
}

[disabled] md-input-container.md-default-theme.md-hue-3 .md-input,
[disabled] md-input-container.md-hue-3 .md-input,
md-input-container.md-default-theme.md-hue-3 .md-input[disabled],
md-input-container.md-hue-3 .md-input[disabled] {
  border-bottom-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.38);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-list.md-default-theme.md-hue-3 .md-proxy-focus.md-focused div.md-no-style,
md-list.md-hue-3 .md-proxy-focus.md-focused div.md-no-style {
  background-color: rgb(48, 48, 48);
}

md-list.md-default-theme.md-hue-3 md-list-item .md-avatar-icon,
md-list.md-hue-3 md-list-item .md-avatar-icon {
  background-color: rgba(0, 0, 0, 0.38);
  color: rgb(224, 224, 224);
}

md-menu-content.md-default-theme.md-hue-3,
md-menu-content.md-hue-3 {
  background-color: rgb(38, 38, 38);
}

md-menu-content.md-default-theme.md-hue-3 md-menu-divider,
md-menu-content.md-hue-3 md-menu-divider {
  background-color: rgba(0, 0, 0, 0.12);
}

md-menu-bar.md-default-theme.md-hue-3 md-menu.md-open>button,
md-menu-bar.md-hue-3 md-menu.md-open>button,
md-menu-bar.md-default-theme.md-hue-3 md-menu>button:focus,
md-menu-bar.md-hue-3 md-menu>button:focus {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

md-menu-bar.md-default-theme.md-hue-3.md-open:not(.md-keyboard-mode) md-menu:hover>button,
md-menu-bar.md-hue-3.md-open:not(.md-keyboard-mode) md-menu:hover>button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-menu-bar.md-default-theme.md-hue-3:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-hue-3:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,
md-menu-bar.md-default-theme.md-hue-3:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,
md-menu-bar.md-hue-3:not(.md-keyboard-mode):not(.md-open) md-menu button:hover {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-menu-content.md-default-theme.md-hue-3 .md-menu>.md-button::after,
md-menu-content.md-hue-3 .md-menu>.md-button::after {
  color: rgba(255, 255, 255, 0.54);
}

md-menu-content.md-default-theme.md-hue-3 .md-menu.md-open>.md-button,
md-menu-content.md-hue-3 .md-menu.md-open>.md-button {
  background-color: rgba(135, 135, 135, 0.2);
}

md-toolbar.md-default-theme.md-hue-3.md-menu-toolbar,
md-toolbar.md-hue-3.md-menu-toolbar {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

md-toolbar.md-default-theme.md-hue-3.md-menu-toolbar md-toolbar-filler md-icon,
md-toolbar.md-hue-3.md-menu-toolbar md-toolbar-filler md-icon {
  color: rgba(255, 255, 255, 0.87);
}

md-nav-bar.md-default-theme.md-hue-3 .md-nav-bar,
md-nav-bar.md-hue-3 .md-nav-bar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

._md-panel-backdrop.md-default-theme.md-hue-3,
._md-panel-backdrop.md-hue-3 {
  background-color: rgb(33, 33, 33);
}

md-select.md-default-theme.md-hue-3[disabled] .md-select-value,
md-select.md-hue-3[disabled] .md-select-value {
  border-bottom-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 33%, rgba(0, 0, 0, 0) 0px);
}

md-select-menu.md-default-theme.md-hue-3 md-content,
md-select-menu.md-hue-3 md-content {
  background-color: rgb(38, 38, 38);
}

md-select-menu.md-default-theme.md-hue-3 md-content md-option:not([disabled]):focus,
md-select-menu.md-hue-3 md-content md-option:not([disabled]):focus,
md-select-menu.md-default-theme.md-hue-3 md-content md-option:not([disabled]):hover,
md-select-menu.md-hue-3 md-content md-option:not([disabled]):hover {
  background-color: rgba(135, 135, 135, 0.18);
}

.md-checkbox-enabled.md-default-theme.md-hue-3[selected] .md-ripple,
.md-checkbox-enabled.md-hue-3[selected] .md-ripple {
  color: rgb(138, 138, 138);
}

md-sidenav.md-default-theme.md-hue-3,
md-sidenav.md-hue-3,
md-sidenav.md-default-theme.md-hue-3 md-content,
md-sidenav.md-hue-3 md-content {
  background-color: rgb(38, 38, 38);
}

md-slider.md-default-theme.md-hue-3 .md-track,
md-slider.md-hue-3 .md-track {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-3 .md-track-ticks,
md-slider.md-hue-3 .md-track-ticks {
  color: rgba(255, 255, 255, 0.87);
}

md-slider.md-default-theme.md-hue-3 .md-disabled-thumb,
md-slider.md-hue-3 .md-disabled-thumb {
  border-color: rgb(69, 69, 69);
  background-color: rgb(69, 69, 69);
}

md-slider.md-default-theme.md-hue-3.md-min .md-thumb::after,
md-slider.md-hue-3.md-min .md-thumb::after {
  background-color: rgb(69, 69, 69);
  border-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-3.md-min .md-focus-ring,
md-slider.md-hue-3.md-min .md-focus-ring {
  background-color: rgba(0, 0, 0, 0.38);
}

md-slider.md-default-theme.md-hue-3.md-min[md-discrete] .md-thumb::after,
md-slider.md-hue-3.md-min[md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.87);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-3.md-min[md-discrete] .md-sign,
md-slider.md-hue-3.md-min[md-discrete] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3.md-min[md-discrete] .md-sign::after,
md-slider.md-hue-3.md-min[md-discrete] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3.md-min[md-discrete][md-vertical] .md-sign::after,
md-slider.md-hue-3.md-min[md-discrete][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-hue-3[disabled]:not(.md-min) .md-thumb::after,
md-slider.md-default-theme.md-hue-3[disabled][md-discrete] .md-thumb::after,
md-slider.md-hue-3[disabled][md-discrete] .md-thumb::after {
  background-color: rgba(0, 0, 0, 0.38);
  border-color: rgba(0, 0, 0, 0);
}

md-slider.md-default-theme.md-hue-3[disabled][readonly] .md-sign,
md-slider.md-hue-3[disabled][readonly] .md-sign {
  background-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3[disabled][readonly] .md-sign::after,
md-slider.md-hue-3[disabled][readonly] .md-sign::after {
  border-top-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3[disabled][readonly][md-vertical] .md-sign::after,
md-slider.md-hue-3[disabled][readonly][md-vertical] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(104, 104, 104);
}

md-slider.md-default-theme.md-hue-3[disabled][readonly] .md-disabled-thumb,
md-slider.md-hue-3[disabled][readonly] .md-disabled-thumb {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.md-subheader.md-default-theme.md-hue-3,
.md-subheader.md-hue-3 {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-3 .md-ink-ripple,
md-switch.md-hue-3 .md-ink-ripple {
  color: rgb(158, 158, 158);
}

md-switch.md-default-theme.md-hue-3 .md-thumb,
md-switch.md-hue-3 .md-thumb {
  background-color: rgb(43, 43, 43);
}

md-switch.md-default-theme.md-hue-3 .md-bar,
md-switch.md-hue-3 .md-bar {
  background-color: rgb(135, 135, 135);
}

md-switch.md-default-theme.md-hue-3[disabled] .md-thumb,
md-switch.md-hue-3[disabled] .md-thumb {
  background-color: rgb(104, 104, 104);
}

md-switch.md-default-theme.md-hue-3[disabled] .md-bar,
md-switch.md-hue-3[disabled] .md-bar {
  background-color: rgba(0, 0, 0, 0.12);
}

md-tabs.md-default-theme.md-hue-3 md-tabs-wrapper,
md-tabs.md-hue-3 md-tabs-wrapper {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
}

md-toast.md-default-theme.md-hue-3 .md-toast-content,
md-toast.md-hue-3 .md-toast-content {
  background-color: rgb(50, 50, 50);
  color: rgb(250, 250, 250);
}

md-toast.md-default-theme.md-hue-3 .md-toast-content .md-button,
md-toast.md-hue-3 .md-toast-content .md-button {
  color: rgb(250, 250, 250);
}

.md-panel.md-tooltip.md-default-theme.md-hue-3,
.md-panel.md-tooltip.md-hue-3 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(97, 97, 97);
}

body.md-default-theme.md-hue-3,
body.md-hue-3,
html.md-default-theme.md-hue-3,
html.md-hue-3 {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(69, 69, 69);
}

a.md-no-style,
button.md-no-style {
  background-color: inherit;
  border-color: initial;
}

input:-webkit-autofill {
  text-shadow: none;
}

.md-visually-hidden {
  border-color: initial;
}

.md-shadow-bottom-z-1 {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px;
}

.md-shadow-bottom-z-2 {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px 0px;
}

@-webkit-keyframes md-remove-ripple {
  0% {}
  100% {}
}

@keyframes md-remove-ripple {
  0% {}
  100% {}
}

.md-scroll-mask {
  background-color: rgba(0, 0, 0, 0);
}

.md-scroll-mask>.md-scroll-mask-bar {
  background-color: rgb(43, 43, 43);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 1px inset;
}

@media (min-width: 960px) {}

md-autocomplete[md-floating-label] {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-autocomplete input:not(.md-input) {
  border-color: initial;
  box-shadow: none;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-autocomplete .md-show-clear-button button {
  border-color: initial;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

@media not all {
  md-autocomplete input {
    border-color: rgb(38, 38, 38);
  }
  md-autocomplete li:focus {
    color: rgb(255, 255, 255);
  }
}

.md-virtual-repeat-container.md-autocomplete-suggestions-container {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px;
}

@media not all {
  .md-autocomplete-suggestions,
  md-autocomplete {
    border-color: rgb(38, 38, 38);
  }
}

md-bottom-sheet .md-subheader {
  background-color: rgba(0, 0, 0, 0);
}

@media (max-width: 960px) {}

@media (min-width: 960px) and (max-width: 1279px) {}

@media (min-width: 1280px) and (max-width: 1919px) {}

@media (min-width: 1920px) {}

md-bottom-sheet.md-grid md-list-item .md-grid-item-content {
  border-color: rgba(0, 0, 0, 0);
}

@media not all {
  md-bottom-sheet {
    border-color: rgb(38, 38, 38);
  }
}

.md-button {
  border-color: initial;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: currentcolor;
}

.md-button.md-icon {
  background-image: none;
  background-color: initial;
}

.md-button.md-raised:not([disabled]) {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px;
}

.md-button.md-fab {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px;
}

.md-button:not([disabled]).md-fab.md-focused,
.md-button:not([disabled]).md-raised.md-focused {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px;
}

.md-button:not([disabled]).md-fab:active,
.md-button:not([disabled]).md-raised:active {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px 0px;
}

@media not all {
  .md-button.md-fab,
  .md-button.md-raised {
    border-color: rgb(38, 38, 38);
  }
}

md-card {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
}

@media not all {
  md-card {
    border-color: rgb(38, 38, 38);
  }
}

md-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container::before {
  background-color: rgba(0, 0, 0, 0.12);
}

md-checkbox .md-container::before {
  background-color: rgba(0, 0, 0, 0);
}

md-checkbox.md-checked .md-icon {
  border-color: rgba(0, 0, 0, 0);
}

md-checkbox.md-checked .md-icon::after {
  border-top-color: initial;
  border-left-color: initial;
}

md-checkbox.md-indeterminate .md-icon::after {
  border-top-color: initial;
  border-left-color: initial;
}

.md-chips md-chip .md-chip-remove {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: initial;
  box-shadow: none;
}

.md-chips .md-chip-input-container input:not([type]),
.md-chips .md-chip-input-container input[type="email"],
.md-chips .md-chip-input-container input[type="number"],
.md-chips .md-chip-input-container input[type="tel"],
.md-chips .md-chip-input-container input[type="text"],
.md-chips .md-chip-input-container input[type="url"] {
  border-color: initial;
}

.md-chips .md-chip-input-container md-autocomplete,
.md-chips .md-chip-input-container md-autocomplete-wrap {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {
  box-shadow: none;
}

.md-chips .md-chip-input-container input {
  border-color: initial;
}

.md-chips .md-chip-input-container md-autocomplete {
  box-shadow: none;
}

.md-chips .md-chip-input-container input {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

@media not all {
  .md-chip-input-container,
  md-chip {
    border-color: rgb(38, 38, 38);
  }
  .md-chip-input-container md-autocomplete {
    border-color: initial;
  }
}

@media print {}

.md-calendar-scroll-container {
  box-shadow: rgba(0, 0, 0, 0.2) -3px 3px 6px inset;
}

.md-calendar-date {
  border-color: initial;
}

.md-calendar-day-header th {
  border-color: initial;
}

.md-calendar:first-child {
  border-top-color: rgba(0, 0, 0, 0);
}

.md-datepicker-button {
  background-image: none;
  background-color: initial;
}

.md-datepicker-input {
  border-color: initial;
  box-shadow: none;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

._md-datepicker-floating-label>md-datepicker .md-datepicker-input-container {
  border-color: initial;
}

.md-datepicker-calendar-pane {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.md-datepicker-input-mask {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.md-datepicker-expand-triangle {
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: initial;
}

md-datepicker[disabled] .md-datepicker-input-container {
  border-bottom-color: rgba(0, 0, 0, 0);
}

.md-datepicker-open .md-datepicker-input-container,
.md-datepicker-open input.md-input {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-dialog {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

@media not all {
  md-dialog {
    border-color: rgb(38, 38, 38);
  }
}

@media (max-width: 959px) {}

md-fab-toolbar md-toolbar {
  background-color: rgba(0, 0, 0, 0);
}

md-fab-toolbar.md-is-open md-fab-trigger>button {
  box-shadow: none;
}

md-grid-list md-grid-tile md-grid-tile-footer,
md-grid-list md-grid-tile md-grid-tile-header {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.18);
}

@media not all {
  md-grid-tile {
    border-color: rgb(38, 38, 38);
  }
  md-grid-tile-footer {
    border-top-color: rgb(38, 38, 38);
  }
}

md-input-container:not(.md-input-has-value) input:not(:focus),
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field {
  color: rgba(255, 255, 255, 0);
}

md-input-container .md-input {
  background-image: none;
  background-color: initial;
}

md-input-container .md-input:invalid {
  box-shadow: none;
}

.md-resize-handle {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

@media not all {}

md-list-item._md-button-wrap>div.md-button:first-child {
  border-color: initial;
}

@media (max-width: 959px) {}

@media (min-width: 960px) {}

md-menu-bar button {
  border-color: initial;
  background-color: rgba(0, 0, 0, 0);
}

.md-button._md-nav-button:hover {
  background-color: inherit;
}

md-nav-ink-bar {
  background-color: rgb(0, 0, 0);
}

@-webkit-keyframes indeterminate-rotate {
  0% {}
  100% {}
}

@keyframes indeterminate-rotate {
  0% {}
  100% {}
}

md-progress-linear .md-container .md-dashed::before {
  background-color: rgba(0, 0, 0, 0);
}

md-progress-linear .md-container.md-mode-buffer {
  background-color: rgba(0, 0, 0, 0);
}

@-webkit-keyframes query {
  0% {}
  100% {}
}

@keyframes query {
  0% {}
  100% {}
}

@-webkit-keyframes buffer {
  0% {}
  50% {}
  100% {}
}

@keyframes buffer {
  0% {}
  50% {}
  100% {}
}

@-webkit-keyframes md-progress-linear-indeterminate-scale-1 {
  0% {}
  36.6% {}
  69.15% {}
  100% {}
}

@keyframes md-progress-linear-indeterminate-scale-1 {
  0% {}
  36.6% {}
  69.15% {}
  100% {}
}

@-webkit-keyframes md-progress-linear-indeterminate-1 {
  0% {}
  20% {}
  69.15% {}
  100% {}
}

@keyframes md-progress-linear-indeterminate-1 {
  0% {}
  20% {}
  69.15% {}
  100% {}
}

@-webkit-keyframes md-progress-linear-indeterminate-scale-2 {
  0% {}
  19.15% {}
  44.15% {}
  100% {}
}

@keyframes md-progress-linear-indeterminate-scale-2 {
  0% {}
  19.15% {}
  44.15% {}
  100% {}
}

@-webkit-keyframes md-progress-linear-indeterminate-2 {
  0% {}
  25% {}
  48.35% {}
  100% {}
}

@keyframes md-progress-linear-indeterminate-2 {
  0% {}
  25% {}
  48.35% {}
  100% {}
}

md-radio-button .md-container::before {
  background-color: rgba(0, 0, 0, 0);
}

@media not all {
  md-radio-button.md-default-theme .md-on {
    background-color: rgb(38, 38, 38);
  }
}

.md-select-value {
  background-color: rgba(0, 0, 0, 0);
}

md-select-menu {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
}

@media not all {
  .md-select-backdrop {
    background-color: rgba(0, 0, 0, 0);
  }
  md-select-menu {
    border-color: rgb(38, 38, 38);
  }
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container::before {
  background-color: rgba(0, 0, 0, 0);
}

md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon {
  border-color: rgba(0, 0, 0, 0);
}

md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon::after {
  border-top-color: initial;
  border-left-color: initial;
}

md-select-menu[multiple] md-option.md-checkbox-enabled.md-indeterminate .md-icon::after {
  border-top-color: initial;
  border-left-color: initial;
}

@media (min-width: 600px) {}

@media (max-width: 456px) {}

@media not all {
  .md-sidenav-left,
  md-sidenav {
    border-right-color: rgb(38, 38, 38);
  }
  .md-sidenav-right {
    border-left-color: rgb(38, 38, 38);
  }
}

@-webkit-keyframes sliderFocusThumb {
  0% {}
  30% {}
  100% {}
}

@keyframes sliderFocusThumb {
  0% {}
  30% {}
  100% {}
}

@-webkit-keyframes sliderDiscreteFocusThumb {
  0% {}
  50% {}
  100% {}
}

@keyframes sliderDiscreteFocusThumb {
  0% {}
  50% {}
  100% {}
}

@-webkit-keyframes sliderDiscreteFocusRing {
  0% {}
  50% {}
  100% {}
}

@keyframes sliderDiscreteFocusRing {
  0% {}
  50% {}
  100% {}
}

md-slider .md-sign::after {
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}

md-slider[md-vertical][md-discrete] .md-sign::after {
  border-top-color: rgba(0, 0, 0, 0);
  border-right-color: initial;
  border-bottom-color: rgba(0, 0, 0, 0);
}

@media not all {
  md-slider.md-default-theme .md-track {
    border-bottom-color: rgb(38, 38, 38);
  }
}

@-webkit-keyframes subheaderStickyHoverIn {
  0% {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  }
}

@keyframes subheaderStickyHoverIn {
  0% {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  }
}

@-webkit-keyframes subheaderStickyHoverOut {
  0% {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
}

@keyframes subheaderStickyHoverOut {
  0% {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
}

md-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb::before {
  background-color: rgba(0, 0, 0, 0.12);
}

md-switch .md-label {
  border-color: rgba(0, 0, 0, 0);
}

md-switch .md-thumb {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
}

md-switch .md-thumb::before {
  background-color: rgba(0, 0, 0, 0);
}

@media not all {
  md-switch.md-default-theme .md-bar {
    background-color: rgb(102, 102, 102);
  }
  md-switch.md-default-theme.md-checked .md-bar {
    background-color: rgb(135, 135, 135);
  }
  md-switch.md-default-theme .md-thumb {
    background-color: rgb(38, 38, 38);
  }
}

@-webkit-keyframes md-tab-content-hide {
  0% {}
  50% {}
  100% {}
}

@keyframes md-tab-content-hide {
  0% {}
  50% {}
  100% {}
}

md-tabs-wrapper md-next-button,
md-tabs-wrapper md-prev-button {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

md-tabs-wrapper md-prev-button {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==");
  filter: invert(1);
}

md-tabs-wrapper md-next-button {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K");
  filter: invert(1);
}

.md-tab.md-focused,
.md-tab:focus {
  box-shadow: none;
}

md-toast .md-toast-content {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px;
}

@media (max-width: 959px) {}

@media (min-width: 960px) {}

@media (min-width: 1920px) {}

@media not all {
  md-toast {
    border-color: rgb(38, 38, 38);
  }
}

.md-toolbar-tools a {
  color: inherit;
}

@media not all {
  .md-toolbar-tools {
    border-bottom-color: rgb(38, 38, 38);
  }
}

@media (min-width: 0) and (max-width: 959px) and (orientation: portrait) {}

@media (min-width: 0) and (max-width: 959px) and (orientation: landscape) {}

@media (min-width: 960px) {}

.md-whiteframe-1dp,
.md-whiteframe-z1 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
}

.md-whiteframe-2dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
}

.md-whiteframe-3dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
}

.md-whiteframe-4dp,
.md-whiteframe-z2 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.md-whiteframe-5dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
}

.md-whiteframe-6dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.md-whiteframe-7dp,
.md-whiteframe-z3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
}

.md-whiteframe-8dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.md-whiteframe-9dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
}

.md-whiteframe-10dp,
.md-whiteframe-z4 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
}

.md-whiteframe-11dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
}

.md-whiteframe-12dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.md-whiteframe-13dp,
.md-whiteframe-z5 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

.md-whiteframe-14dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
}

.md-whiteframe-15dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}

.md-whiteframe-16dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.md-whiteframe-17dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
}

.md-whiteframe-18dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
}

.md-whiteframe-19dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
}

.md-whiteframe-20dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
}

.md-whiteframe-21dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
}

.md-whiteframe-22dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
}

.md-whiteframe-23dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
}

.md-whiteframe-24dp {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
}

@media not all {
  md-whiteframe {
    border-color: rgb(38, 38, 38);
  }
}

@media print {
  [md-whiteframe],
  md-whiteframe {
    background-color: rgb(38, 38, 38);
  }
}

@media (max-width: 599px) {}

@media (min-width: 600px) {}

@media (min-width: 600px) and (max-width: 959px) {}

@media (min-width: 960px) {}

@media (min-width: 960px) and (max-width: 1279px) {}

@media (min-width: 1280px) {}

@media (min-width: 1280px) and (max-width: 1919px) {}

@media (min-width: 1920px) {}

@media print {}

.rg-bottom,
.rg-left,
.rg-right,
.rg-top {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.rg-bottom span,
.rg-left span,
.rg-right span,
.rg-top span {
  border-color: rgb(89, 89, 89);
}

body {
  background-color: rgb(38, 38, 38);
}

a {
  color: rgb(189, 122, 11);
}

div[role="button"]:focus,
div[role="tab"]:focus {
  background-color: rgba(135, 135, 135, 0.2);
}

@keyframes ring {
  0% {}
  2% {}
  4% {}
  8% {}
  12% {}
  16% {}
  20% {}
  24% {}
  27% {}
  30% {}
  33% {}
  35% {}
  37% {}
  39% {}
  40% {}
  41% {}
  42% {}
}

.gvTextOffscreen {
  border-color: initial;
}

button[disabled] md-icon {
  color: rgba(255, 255, 255, 0.38);
}

md-icon.material-icons-extended {
  color: rgba(255, 255, 255, 0.54);
}

@media (max-width: 599px) {}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe {
  background-color: rgb(38, 38, 38);
  border-color: rgb(92, 92, 92);
  color: rgb(204, 204, 204);
}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-OWB6Me * {
  border-color: rgb(89, 89, 89);
  color: rgb(153, 153, 153);
}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-ZmdkE {
  border-color: rgb(179, 89, 0) rgb(222, 148, 25) rgb(222, 148, 25) rgb(213, 133, 0);
}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-auswjd {
  background-color: rgb(106, 106, 106);
}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-XpnDCe {
  border-color: rgb(106, 106, 106);
}

.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-j4gsHd {
  background-image: url("//ssl.gstatic.com/editor/editortoolbar.png");
  background-color: initial;
  filter: invert(1);
}

gv-address-widget .rXcQNd-C7uZwb-O1htCb.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-XpnDCe {
  border-color: rgb(0, 121, 107);
}

gv-address-widget .tk3N6e-y4JFTd.RTHAJe {
  border-color: rgb(217, 48, 37);
}

gv-address-widget .BzApFe.VIpgJd-Kb3HCc-xl07Ob-LgbsSe-OWB6Me {
  color: rgba(255, 255, 255, 0.38);
}

gv-address-widget .BzApFe:focus,
gv-address-widget .BzApFe:hover {
  box-shadow: none;
}

gv-address-widget .VIpgJd-Kb3HCc-xl07Ob-LgbsSe-j4gsHd,
gv-address-widget div:hover .VIpgJd-Kb3HCc-xl07Ob-LgbsSe-j4gsHd {
  border-color: initial;
}

gv-address-widget .ZgqHFb.ZgqHFb {
  color: rgb(255, 134, 148);
}

gv-address-widget .apPCr {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(38, 38, 38);
}

gv-address-widget .apPCr.AHmuwe {
  color: rgb(255, 134, 148);
}

gv-address-widget .BzApFe {
  background-image: none;
  background-color: initial;
  color: rgba(255, 255, 255, 0.87);
}

gv-address-widget .BzApFe.tk3N6e-y4JFTd {
  border-top-color: rgb(79, 74, 66);
}

gv-address-widget .BzApFe:focus {
  border-color: rgb(0, 121, 107);
}

gv-address-widget .VIpgJd-Kb3HCc-xl07Ob-LgbsSe {
  border-color: rgb(79, 74, 66);
}

gv-address-widget .VIpgJd-Kb3HCc-xl07Ob-LgbsSe-ZmdkE {
  border-color: rgb(79, 74, 66);
}

.tk3N6e-VCkuzd {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  background-color: rgb(38, 38, 38);
  border-color: rgb(106, 106, 106) rgb(106, 106, 106) rgb(125, 125, 125);
}

.tk3N6e-VCkuzd-kmh2Gb {
  background-image: url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png");
  background-color: initial;
  border-color: rgba(0, 0, 0, 0);
  filter: invert(1);
}

.tk3N6e-VCkuzd-kmh2Gb:focus {
  border-color: rgb(254, 158, 2);
}

.tk3N6e-VCkuzd-hFsbo .tk3N6e-VCkuzd-jQ8oHc {
  border-color: initial;
}

.tk3N6e-VCkuzd-hFsbo .tk3N6e-VCkuzd-ez0xG {
  border-color: initial;
}

.tk3N6e-VCkuzd-d6mlqf .tk3N6e-VCkuzd-jQ8oHc {
  border-color: rgb(106, 106, 106) rgba(0, 0, 0, 0);
}

.tk3N6e-VCkuzd-Ya1KTb .tk3N6e-VCkuzd-jQ8oHc {
  border-color: rgb(125, 125, 125) rgba(0, 0, 0, 0);
}

.tk3N6e-VCkuzd-Ya1KTb .tk3N6e-VCkuzd-ez0xG,
.tk3N6e-VCkuzd-d6mlqf .tk3N6e-VCkuzd-ez0xG {
  border-color: rgb(38, 38, 38) rgba(0, 0, 0, 0);
}

.tk3N6e-VCkuzd-y6n2Me .tk3N6e-VCkuzd-jQ8oHc,
.tk3N6e-VCkuzd-cX0Lwc .tk3N6e-VCkuzd-jQ8oHc {
  border-color: rgba(0, 0, 0, 0) rgb(106, 106, 106);
}

.tk3N6e-VCkuzd-y6n2Me .tk3N6e-VCkuzd-ez0xG,
.tk3N6e-VCkuzd-cX0Lwc .tk3N6e-VCkuzd-ez0xG {
  border-color: rgba(0, 0, 0, 0) rgb(38, 38, 38);
}

.vxR8bb-u0pjoe {
  color: rgb(38, 207, 218);
}

.vxR8bb-PW1Kcd {
  color: rgba(255, 255, 255, 0.54);
}

.Os5EFe-hQbnHc {
  color: rgba(255, 255, 255, 0.54);
}

.VIpgJd-xl07Ob {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.2);
}

.VIpgJd-j7LFlb,
.VIpgJd-pWKtN,
.VIpgJd-SFgmFf {
  color: rgb(204, 204, 204);
}

.VIpgJd-j7LFlb-OWB6Me .VIpgJd-j7LFlb-x29Bmf,
.VIpgJd-j7LFlb-OWB6Me .VIpgJd-j7LFlb-bN97Pc {
  color: rgb(204, 204, 204);
}

.VIpgJd-j7LFlb-sn54Q,
.VIpgJd-j7LFlb-ZmdkE {
  background-color: rgb(55, 55, 55);
  border-color: rgb(55, 55, 55);
}

.VIpgJd-j7LFlb-sn54Q .VIpgJd-j7LFlb-bN97Pc,
.VIpgJd-j7LFlb-ZmdkE .VIpgJd-j7LFlb-bN97Pc {
  color: rgb(204, 204, 204);
}

.VIpgJd-wQNmvb-gk6SMd {
  background-image: url("//ssl.gstatic.com/ui/v1/menu/checkmark.png");
  filter: invert(1);
}

.VIpgJd-wQNmvb-gk6SMd .VIpgJd-j7LFlb-bN97Pc {
  color: rgb(204, 204, 204);
}

.VIpgJd-j7LFlb-x29Bmf {
  color: rgb(136, 136, 136);
}

.VIpgJd-j7LFlb-PQTlnb-hgDUwe {
  color: rgb(136, 136, 136);
}

.VIpgJd-gqMrKb {
  border-top-color: rgb(58, 58, 58);
}

.tk3N6e-O1htCb .VIpgJd-Kb3HCc-xl07Ob-LgbsSe-j4gsHd {
  background-image: url("//ssl.gstatic.com/ui/v1/disclosure/grey-disclosure-arrow-up-down.png");
  background-color: initial;
  border-color: initial;
  filter: invert(1);
}

.VIpgJd-hSRGPd-LgbsSe {
  color: rgb(238, 170, 51);
}

.VIpgJd-hSRGPd-LgbsSe-OWB6Me {
  color: rgb(204, 204, 204);
}

.tk3N6e-y4JFTd {
  border-color: rgb(101, 101, 101) rgb(76, 76, 76) rgb(76, 76, 76);
}

.tk3N6e-y4JFTd:focus {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px inset;
  border-color: rgb(254, 158, 2);
}

.x4maId,
.apPCr {
  color: rgb(255, 255, 255);
}

.lJTQad {
  color: rgb(255, 255, 255);
}

.tk3N6e-y4JFTd.RTHAJe,
.VIpgJd-Kb3HCc-xl07Ob-LgbsSe.RTHAJe {
  border-color: rgb(101, 101, 101);
}

.Y9gjLd .VIpgJd-hSRGPd-LgbsSe {
  color: rgb(136, 136, 136);
}

.y4O5rc-sM5MNb h2.md-title {
  color: rgba(255, 255, 255, 0.87);
}

@media (max-width: 599px) {}

.bi7krf-LQLjdd .md-button {
  color: rgb(255, 134, 148);
}

.bi7krf-IJwXE {
  color: rgba(255, 255, 255, 0.54);
}

.bi7krf-kyLfo {
  color: rgb(38, 207, 218);
}

.bi7krf-Jr4hz {
  color: rgb(38, 207, 218);
}

.bi7krf-fz8s2 {
  color: rgba(255, 255, 255, 0.54);
}

.bi7krf-bWk6q {
  color: rgb(38, 207, 218);
}

md-input-container .bi7krf-qTMFQd.md-input[disabled] {
  border-bottom-color: rgba(0, 0, 0, 0.12);
  background-image: unset;
}

.t9J45d-LQLjdd.t9J45d-LQLjdd.t9J45d-LQLjdd {
  border-top-color: initial;
}

.t9J45d-LgbsSe {
  color: rgb(255, 134, 148);
}

.t9J45d-DKkpRe {
  color: rgba(255, 255, 255, 0.54);
}

mat-icon.t9J45d-PShIVc.t9J45d-PShIVc {
  color: rgb(255, 255, 255);
}

.t9J45d-TTsR6 {
  color: rgba(255, 255, 255, 0.54);
}

.t9J45d-jH9lge {
  color: rgb(38, 207, 218);
}

@media (max-height: 600px) {}

@media (max-height: 500px) {}

@media (max-height: 600px) {}

.Xkk8O-j19Rqc {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.Xkk8O-LAEBIe {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.Xkk8O-luk1De {
  border-left-color: rgba(0, 0, 0, 0);
}

.Xkk8O-luk1De:focus {
  background-color: rgba(135, 135, 135, 0.2);
}

.Xkk8O-gk6SMd {
  border-left-color: rgb(0, 121, 107);
  color: rgb(255, 134, 148);
}

@media (max-width: 599px) {}

@media (min-width: 960px) {}

.jznMz-vQA8tf {
  background-color: rgb(48, 48, 48);
}

.Ixt6oe-ORHb .md-button {
  color: rgb(255, 134, 148);
}

@media (max-width: 599px) {}

.Ixt6oe-ORHb {
  background-color: rgb(38, 38, 38);
}

.hLezqd-ORHb .md-button {
  color: rgb(255, 134, 148);
}

.hLezqd-Bz112c.hLezqd-Bz112c {
  color: rgb(232, 113, 10);
}

.hLezqd-ORHb {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.zQ5vdd-haAclf {
  background-color: rgb(38, 38, 38);
}

.zQ5vdd-Bz112c {
  color: rgb(232, 113, 10);
}

.Y8q7Ic-LQLjdd {
  color: rgb(255, 134, 148);
}

.Y8q7Ic-jCveLb {
  color: rgb(255, 134, 148);
}

.Y8q7Ic-uLUfCe {
  color: rgba(255, 255, 255, 0.54);
}

@media (max-width: 599px) {}

.EPj1Ff-m8HfHb:hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.EPj1Ff-OWERKb {
  border-color: initial;
}

.EPj1Ff-jyrRxf tr {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.EPj1Ff-ZP9oKf {
  color: rgba(255, 255, 255, 0.54);
}

@media (min-width: 600px) {}

@media (max-width: 599px) {}

@media (min-width: 600px) {}

@media (min-width: 960px) {}

.aKQtkf-pxvkVb {
  color: rgb(255, 134, 148);
}

.aKQtkf-tJHJj {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.aKQtkf-IWqmv {
  color: rgb(255, 134, 148);
}

.aKQtkf-jyrRxf tr {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

@media (max-width: 599px) {}

.aKQtkf-jyrRxf th {
  color: unset;
}

@media (min-width: 960px) {}

.PZFBrb-LQLjdd {
  color: rgb(255, 134, 148);
}

.PZFBrb-haAclf.PZFBrb-xl07Ob {
  color: rgba(255, 255, 255, 0.87);
}

.PZFBrb-K0un0e {
  color: rgba(255, 255, 255, 0.54);
}

.PZFBrb-ClVh6d {
  color: rgba(255, 255, 255, 0.54);
}

.lp3vjd-LgbsSe:focus {
  background-color: rgba(135, 135, 135, 0.2);
}

.lp3vjd-H9tDt:focus {
  background-color: rgba(135, 135, 135, 0.2);
}

.lp3vjd-LgbsSe {
  color: rgb(223, 222, 219);
}

.lp3vjd-cHYyed {
  color: rgba(255, 255, 255, 0.56);
}

.uYPEqb-H9tDt:hover button:not([disabled]) md-icon {
  color: rgb(255, 134, 148);
}

.uYPEqb-H9tDt:hover span:not([disabled]) {
  color: currentcolor;
}

@keyframes showAfterSomeTime {
  0% {}
  90% {}
  100% {}
}

.lsAzj-yHlfx {
  color: rgba(255, 255, 255, 0.54);
}

.lsAzj-K92Tbc {
  background-color: rgb(38, 38, 38);
}

.oErxNe-pSzOP>div>div {
  background-image: url("//ssl.gstatic.com/docs/picker/images/loading_spinner.svg");
  filter: invert(1);
}

@-webkit-keyframes mspin-medium-film {
  0% {}
  100% {}
}

@-webkit-keyframes mspin-rotate {
  0% {}
  100% {}
}

@-webkit-keyframes mspin-revrot {
  0% {}
  100% {}
}

.VIpgJd-TUo6Hb,
.XKSfm-Sx9Kwc {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.333);
}

.VIpgJd-TUo6Hb-xJ5Hnf,
.XKSfm-Sx9Kwc-xJ5Hnf {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.XKSfm-Sx9Kwc {
  color: rgb(255, 255, 255);
}

.XKSfm-Sx9Kwc-r4nke {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.XKSfm-Sx9Kwc-r4nke-TvD9Pc::after {
  background-image: url("//ssl.gstatic.com/ui/v1/dialog/close-x.png");
  background-color: initial;
  filter: invert(1);
}

.XKSfm-Sx9Kwc-bN97Pc {
  background-color: rgb(38, 38, 38);
}

.XKSfm-Sx9Kwc-c6xFrd button {
  background-color: rgb(48, 48, 48);
  background-image: -webkit-linear-gradient(top, rgb(48, 48, 48), rgb(52, 52, 52));
  border-color: rgba(0, 0, 0, 0.1);
  color: rgb(187, 187, 187);
}

.XKSfm-Sx9Kwc-c6xFrd button:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  background-color: rgb(45, 45, 45);
  background-image: -webkit-linear-gradient(top, rgb(45, 45, 45), rgb(52, 52, 52));
  border-color: rgb(95, 95, 95);
  color: rgb(204, 204, 204);
}

.XKSfm-Sx9Kwc-c6xFrd button:active {
  background-color: rgb(45, 45, 45);
  background-image: -webkit-linear-gradient(top, rgb(45, 45, 45), rgb(52, 52, 52));
  border-color: rgb(95, 95, 95);
  color: rgb(204, 204, 204);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px inset;
}

.XKSfm-Sx9Kwc-c6xFrd button:focus {
  border-color: rgb(254, 158, 2);
}

.XKSfm-Sx9Kwc-c6xFrd button[disabled] {
  box-shadow: none;
  background-color: rgb(38, 38, 38);
  background-image: none;
  border-color: rgba(0, 0, 0, 0.05);
  color: rgb(184, 184, 184);
}

.XKSfm-Sx9Kwc-c6xFrd .VIpgJd-ldDVFe-JIbuQc {
  background-color: rgb(254, 158, 2);
  background-image: -webkit-linear-gradient(top, rgb(254, 158, 2), rgb(71, 135, 237));
  border-color: rgb(48, 121, 237);
  color: rgb(255, 255, 255);
}

.XKSfm-Sx9Kwc-c6xFrd .VIpgJd-ldDVFe-JIbuQc:hover {
  background-color: rgb(53, 122, 232);
  background-image: -webkit-linear-gradient(top, rgb(254, 158, 2), rgb(53, 122, 232));
  border-color: rgb(47, 91, 183);
  color: rgb(255, 255, 255);
}

.XKSfm-Sx9Kwc-c6xFrd .VIpgJd-ldDVFe-JIbuQc:active {
  background-color: rgb(53, 122, 232);
  background-image: -webkit-linear-gradient(top, rgb(254, 158, 2), rgb(53, 122, 232));
  border-color: rgb(47, 91, 183);
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px inset;
}

.XKSfm-Sx9Kwc-c6xFrd .VIpgJd-ldDVFe-JIbuQc:focus {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
  border-color: rgba(0, 0, 0, 0);
}

.XKSfm-Sx9Kwc-c6xFrd .VIpgJd-ldDVFe-JIbuQc[disabled] {
  box-shadow: none;
  background-image: initial;
  background-color: rgb(254, 158, 2);
  color: rgb(255, 255, 255);
}

.jcJzye-fFW7wc.XKSfm-Sx9Kwc {
  background-color: rgb(38, 38, 38);
  border-color: initial;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
}

.jcJzye-fFW7wc.XKSfm-Sx9Kwc-xJ5Hnf {
  background-color: rgb(0, 0, 0);
}

.jcJzye-fFW7wc.SFSMEc-fFW7wc.XKSfm-Sx9Kwc {
  background-color: rgba(0, 0, 0, 0);
  border-color: initial;
  box-shadow: none;
}

.jcJzye-fFW7wc.SFSMEc-fFW7wc.XKSfm-Sx9Kwc-bN97Pc {
  background-color: rgba(0, 0, 0, 0);
}

.q68de-iOyk4d {
  color: rgb(255, 255, 255);
}

.q68de-dcumHe {
  color: rgba(255, 255, 255, 0.54);
}

.q68de-Ne3sFf {
  color: rgba(255, 255, 255, 0.54);
}

.B3EWm-ujry3d md-icon,
.B3EWm-ujry3d span {
  color: rgb(255, 134, 148);
}

.B3EWm-FUbHCe {
  background-color: rgb(38, 38, 38);
}

.B3EWm-elyAmd {
  color: rgb(138, 138, 138);
}

[contenteditable="true"] {
  color: rgb(223, 222, 219);
}

[contenteditable="true"]:empty::before {
  color: rgba(255, 255, 255, 0.38);
}

[contenteditable="false"]:empty::before {
  color: rgba(255, 255, 255, 0.38);
}

.B3EWm-JUCs7e div {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.B3EWm-JUCs7e md-icon,
.B3EWm-JUCs7e .mat-icon.mat-icon {
  color: rgb(255, 255, 255);
}

.B3EWm-JUCs7e:hover span,
.B3EWm-JUCs7e:focus span {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.3);
}

md-input-container>textarea.B3EWm-YPqjbf {
  border-bottom-color: initial;
}

@media (max-width: 599px) {}

.fFW7wc-OEVmcd {
  border-color: initial;
}

.fFW7wc.XKSfm-Sx9Kwc-xJ5Hnf {
  background-color: rgb(38, 38, 38);
}

.fFW7wc.XKSfm-Sx9Kwc {
  background-color: rgb(38, 38, 38);
  border-color: rgb(121, 121, 121);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;
}

.iCOGGf-tJHJj {
  background-color: rgb(38, 38, 38);
}

.iCOGGf-Wz3zdc:focus {
  background-color: rgba(135, 135, 135, 0.2);
}

.iCOGGf-Wz3zdc:hover {
  background-color: rgba(135, 135, 135, 0.2);
}

.rogbK-haAclf md-content {
  background-color: rgb(38, 38, 38);
}

.rogbK-mpQKUb {
  border-bottom-color: rgba(0, 0, 0, 0);
}

section.rogbK-gk6SMd {
  border-bottom-color: rgb(0, 121, 107);
}

section.rogbK-gk6SMd mat-icon.mat-icon {
  color: rgb(255, 134, 148);
}

.NGnBD-FkYQGd>li {
  background-color: rgb(38, 38, 38);
}

.NGnBD-esGHce {
  border-color: rgba(0, 0, 0, 0.12);
}

.NGnBD-esGHce:focus {
  border-color: rgb(66, 133, 244);
}

.NGnBD-haAclf input {
  border-color: rgb(79, 74, 66);
}

.NGnBD-haAclf md-input-container.md-input-focused label:not(.md-no-float),
.NGnBD-haAclf md-input-container.md-input-has-value label:not(.md-no-float) {
  background-color: rgb(38, 38, 38);
}

.Jn3py-MZArnb {
  color: rgba(255, 255, 255, 0.54);
}

.Gb0ubd-MZArnb {
  color: rgba(255, 255, 255, 0.54);
}

.Gb0ubd-XpnDCe {
  background-color: rgba(135, 135, 135, 0.2);
}

.REV3g-XpnDCe {
  background-color: rgba(135, 135, 135, 0.2);
}

.REV3g-t1uKQe {
  color: rgba(255, 255, 255, 0.54);
}

.dOUild-XSJd1 {
  color: rgba(255, 255, 255, 0.54);
}

.dOUild-XpnDCe {
  background-color: rgba(135, 135, 135, 0.2);
}

md-icon.dOUild-fI6EEc {
  color: rgb(244, 180, 0);
}

.dOUild-Od0oM {
  color: rgba(255, 255, 255, 0.54);
}

.dOUild-yreACb {
  background-color: rgb(38, 38, 38);
}

.BN08bf-XPtOyb {
  border-color: initial;
  color: rgb(255, 255, 255);
}

.BN08bf-OVkoRd md-chip,
.BN08bf-OVkoRd .md-chip-content {
  background-image: none;
  background-color: initial;
}

.BN08bf-OVkoRd md-chip.md-focused .BN08bf-XPtOyb {
  background-color: rgba(0, 0, 0, 0);
}

.BN08bf-u9UW7e {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.BN08bf-R44ZW {
  background-color: rgb(38, 38, 38);
}

.BN08bf-MZArnb {
  color: rgba(255, 255, 255, 0.54);
}

.BN08bf-pex4lc {
  color: rgba(255, 255, 255, 0.54);
}

.BN08bf-Zdwnn {
  color: rgba(255, 255, 255, 0.54);
}

md-icon.BN08bf-X5DuWc {
  color: rgb(255, 255, 255);
}

md-menu-item>.BN08bf-HCsBIf {
  color: rgba(255, 255, 255, 0.54);
}

.BN08bf-H9tDt md-chips.BN08bf-OVkoRd md-chips-wrap {
  box-shadow: none;
}

.BN08bf-uWkBM {
  color: rgb(255, 255, 255);
}

@media (max-width: 599px) {}

.BN08bf-H9tDt md-input-container input {
  border-color: rgba(0, 0, 0, 0);
}

.TK1dEe-bN97Pc {
  color: rgb(255, 255, 255);
}

.TK1dEe-bN97Pc md-icon,
.TK1dEe-bN97Pc.TK1dEe-bN97Pc:hover button:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.TK1dEe-haAclf {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.TK1dEe-haAclf::after {
  border-bottom-color: initial;
  border-top-color: rgb(0, 105, 114);
}

md-icon.tDBuBb-Bz112c.tDBuBb-QV9pW,
md-icon.tDBuBb-Bz112c.tDBuBb-x36cLc {
  color: rgb(255, 55, 172);
}

md-icon.tDBuBb-Bz112c.tDBuBb-vV3LMc {
  color: rgb(0, 255, 255);
}

.tDBuBb-pWP6Lc {
  color: rgba(255, 255, 255, 0.54);
}

.tDBuBb-NastXc {
  border-bottom-color: rgba(0, 0, 0, 0.12);
  color: rgba(255, 255, 255, 0.54);
}

@media (max-width: 599px) {}

.tDBuBb-QV9pW {
  color: rgb(225, 113, 193);
}

.tDBuBb-x36cLc {
  color: rgb(229, 140, 23);
}

.tDBuBb-vV3LMc {
  color: rgb(38, 207, 218);
}

.f38Hjc-PLDbbf .f38Hjc-hpsOxb.f38Hjc-hpsOxb {
  color: rgb(128, 128, 128);
}

.f38Hjc-PLDbbf .md-button {
  color: rgb(255, 134, 148);
}

.f38Hjc-hIujcf {
  color: rgba(255, 255, 255, 0.54);
}

.f38Hjc-F6T8uf md-checkbox:not([disabled]).md-primary:not(.md-checked) .md-icon {
  border-color: rgb(87, 99, 104);
}

.UA9iab-U0exHf {
  color: rgba(255, 255, 255, 0.87);
}

.Bqxti-nNrmv {
  color: rgba(255, 255, 255, 0);
}

.Bqxti-VCkuzd {
  border-color: initial;
}

.Bqxti-jOfkMb.Bqxti-rGxhhf {
  color: rgb(38, 207, 218);
}

.Bqxti-HIQJ9,
.Bqxti-jOfkMb {
  color: rgba(255, 255, 255, 0.54);
}

.Bqxti-MJZihc .Bqxti-GNEpNe {
  color: rgb(255, 255, 255);
}

.Bqxti-VCkuzd,
.Bqxti-VCkuzd a {
  color: rgb(255, 178, 191);
  background-color: rgb(85, 36, 38);
}

.Bqxti-n94mxc .Bqxti-VCkuzd,
.Bqxti-n94mxc .Bqxti-MJZihc.Bqxti-VCkuzd {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.Bqxti-MJZihc.Bqxti-VCkuzd,
.Bqxti-MJZihc.Bqxti-VCkuzd a {
  background-color: rgb(57, 49, 45);
  color: rgb(223, 222, 219);
}

.uM2Vn-pzCKEc:hover md-icon {
  color: rgb(255, 134, 148);
}

.uM2Vn-VdSJob {
  color: rgba(255, 255, 255, 0.54);
}

.WdVWjf-VCkuzd {
  background-color: rgb(38, 38, 38);
  border-color: rgb(0, 121, 107);
}

.WdVWjf-VCkuzd,
.WdVWjf-VCkuzd a {
  color: rgb(255, 134, 148);
}

.WdVWjf-VCkuzd:hover,
gv-smart-reply-item:focus .WdVWjf-VCkuzd {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.ZRgO8c-oyZWsd:hover .ZRgO8c-ienHib {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.34);
}

.ZRgO8c-L8Rqdd.ZRgO8c-L8Rqdd {
  color: rgb(255, 255, 255);
}

.ZRgO8c-ienHib {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

.ZRgO8c-GWfNzd .ZRgO8c-ienHib.ZRgO8c-ienHib {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

@media (min-width: 1280px) {}

@media (min-width: 960px) and (max-width: 1280px) {}

@media (min-width: 960px) {}

.ZRgO8c-MJZihc gv-annotation,
.ZRgO8c-MJZihc gv-annotation a {
  color: inherit;
}

.ZRgO8c-ienHib {
  border-color: rgb(95, 99, 104);
  background-color: rgb(38, 38, 38);
}

.ZRgO8c-n94mxc .ZRgO8c-ienHib,
.ZRgO8c-oyZWsd:hover .ZRgO8c-ienHib {
  border-color: initial;
}

.ZRgO8c-n94mxc gv-annotation,
.ZRgO8c-n94mxc gv-annotation a,
.ZRgO8c-n94mxc.ZRgO8c-MJZihc gv-annotation,
.ZRgO8c-n94mxc.ZRgO8c-MJZihc gv-annotation a {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.ZRgO8c-n94mxc .Bqxti-Wz3zdc gv-annotation {
  background-color: rgba(0, 0, 0, 0);
}

@media (min-width: 960px) and (max-width: 1280px) {}

.wnqXZe-vaWIle {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.wnqXZe-HIQJ9 {
  color: rgba(255, 255, 255, 0.54);
}

@media (max-width: 599px) {}

.wnqXZe-uquGtd {
  border-top-color: rgb(82, 82, 82);
}

.wnqXZe-p5wKMe {
  background-color: rgb(131, 54, 61);
}

.wnqXZe-kemPlf {
  background-color: rgb(0, 121, 107);
}

.wnqXZe-Igk6W {
  background-color: rgb(0, 121, 107);
}

.wnqXZe-xro71b {
  background-color: rgb(0, 121, 107);
}

.vhRrWe-mMc1Ob {
  color: rgba(255, 255, 255, 0.54);
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.12);
}

.uH0FRc-haAclf {
  border-color: initial;
}

.uH0FRc-IGlMSc {
  color: rgb(255, 255, 255);
}

.uH0FRc-haAclf md-progress-linear .md-container {
  background-color: rgba(38, 38, 38, 0);
  border-color: rgb(38, 38, 38);
}

.uH0FRc-haAclf md-progress-linear .md-bar {
  background-color: rgb(38, 38, 38);
}

.uH0FRc-MQdOsf {
  border-color: initial;
}

.uH0FRc-gk6SMd.uH0FRc-haAclf,
.uH0FRc-gk6SMd.uH0FRc-haAclf .grey-700,
.uH0FRc-gk6SMd.uH0FRc-haAclf .grey-900 {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.uH0FRc-gk6SMd .uH0FRc-IGlMSc button.mat-icon-button.mat-icon-button {
  color: rgb(255, 255, 255);
}

.uH0FRc-haAclf {
  background-color: rgb(57, 49, 45);
  color: rgb(223, 222, 219);
}

.uH0FRc-p5wKMe {
  background-color: rgb(131, 54, 61);
}

.uH0FRc-kemPlf {
  background-color: rgb(0, 121, 107);
}

.uH0FRc-Igk6W {
  background-color: rgb(0, 121, 107);
}

.uH0FRc-xro71b {
  background-color: rgb(0, 121, 107);
}

.d8IJmb-VtOx3e .d8IJmb-HiaYvf {
  border-color: rgba(0, 0, 0, 0.12);
}

.d8IJmb-HiaYvf {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.d8IJmb-EtrPge {
  background-color: rgba(38, 38, 38, 0.5);
}

.d8IJmb-EtrPge .mat-icon.mat-icon {
  color: rgba(255, 255, 255, 0.35);
}

@media (max-width: 599px) {}

.vUJyv-a4fUwd-hFsbo-Lb81de {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  background-color: initial;
}

.vUJyv-a4fUwd-LgbsSe md-icon {
  color: rgb(255, 255, 255);
}

.vUJyv-Vkfede-uMX1Ee-AHe6Kc {
  background-color: rgb(0, 0, 0);
}

@media (max-width: 599px) {}

md-icon.qVBuHc-mQ2ste {
  color: rgba(255, 255, 255, 0.75);
}

@media (max-width: 599px) {}

.mat-icon.qVBuHc-mQ2ste.qVBuHc-mQ2ste {
  color: rgb(255, 255, 255);
}

.IC8yrb-haAclf {
  color: rgb(255, 255, 255);
}

.IC8yrb-haAclf md-icon,
.IC8yrb-haAclf.IC8yrb-haAclf:hover button:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.IC8yrb-haAclf {
  background-image: initial;
  background-color: initial;
}

.IC8yrb-haAclf::after {
  border-bottom-color: initial;
  border-top-color: rgb(0, 105, 114);
}

@media (min-width: 1280px) {}

.Vupfr-ge6pde {
  color: rgba(255, 255, 255, 0.54);
}

.GYQtq-yAmrBc {
  color: rgba(255, 255, 255, 0.54);
}

.GYQtq-CLHpQd .GYQtq-mpvPNd {
  box-shadow: none;
}

.GYQtq-CLHpQd.GYQtq-CLHpQd .GYQtq-mpvPNd:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.GYQtq-CLHpQd .GYQtq-XTYNyb .GYQtq-yAmrBc {
  color: rgba(255, 255, 255, 0.54);
}

.GYQtq-CLHpQd .GYQtq-mpvPNd[disabled] mat-icon {
  color: rgba(255, 255, 255, 0.26);
}

.GYQtq-CLHpQd {
  border-right-color: rgba(0, 0, 0, 0.12);
}

.GYQtq-JjL0qc {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

@media (min-width: 1280px) {}

.GYQtq-ryII8e.GYQtq-ryII8e.GYQtq-ryII8e:not([disabled]) md-icon {
  color: rgb(255, 255, 255);
}

.GYQtq-I3swsf.GYQtq-I3swsf {
  background-image: initial;
  background-color: rgb(69, 69, 69);
}

.GYQtq-pZARYb {
  border-left-color: rgba(0, 0, 0, 0.12);
}

.GYQtq-ocIXwb {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

@media (max-width: 599px) {
  .GYQtq-ocIXwb {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  }
}

.GYQtq-CLHpQd .rg-right span,
.GYQtq-CLHpQd .rg-left span,
.GYQtq-CLHpQd .rg-top span,
.GYQtq-CLHpQd .rg-bottom span {
  border-color: initial;
}

.VInAq-VdSJob {
  color: rgb(255, 134, 148);
}

.q2hAhb-OjaX2e.q2hAhb-OjaX2e.q2hAhb-OjaX2e {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.q2hAhb-OjaX2e.q2hAhb-OjaX2e.q2hAhb-OjaX2e.q2hAhb-OjaX2e md-icon {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 134, 148);
}

.q2hAhb-RZ063d {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

md-icon.Ng6ome-QV9pW,
md-icon.Ng6ome-x36cLc {
  color: rgb(255, 55, 172);
}

md-icon.Ng6ome-vV3LMc {
  color: rgb(0, 255, 255);
}

.Ng6ome-QV9pW {
  color: rgb(225, 113, 193);
}

.Ng6ome-x36cLc {
  color: rgb(229, 140, 23);
}

.Ng6ome-vV3LMc {
  color: rgb(38, 207, 218);
}

md-icon.FNt9Hc-iMOZub {
  color: rgb(255, 55, 172);
}

md-icon.FNt9Hc-vV3LMc {
  color: rgb(0, 255, 255);
}

.FNt9Hc-QV9pW {
  color: rgb(225, 113, 193);
}

.FNt9Hc-x36cLc {
  color: rgb(229, 140, 23);
}

.FNt9Hc-vV3LMc {
  color: rgb(38, 207, 218);
}

.LKz3Fb-u0pjoe {
  color: rgb(38, 207, 218);
}

.rkljfb-YLEF4c.rkljfb-vWGtUe:focus {
  background-color: rgba(0, 0, 0, 0);
}

@media (min-width: 600px) {}

.rkljfb-ymuZHc .rkljfb-rVkNNe.rkljfb-rVkNNe.rkljfb-rVkNNe {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.rkljfb-pdrzKc.rkljfb-pdrzKc {
  color: rgb(255, 255, 255);
}

md-icon.material-icons-extended.rkljfb-PUrR6d {
  color: rgb(38, 207, 218);
}

md-icon.material-icons-extended.rkljfb-uARhaf {
  color: rgba(255, 255, 255, 0.38);
}

.rkljfb-H9tDt {
  border-color: initial;
  color: rgb(160, 156, 151);
}

.rkljfb-H9tDt:hover,
.rkljfb-H9tDt:focus {
  background-color: rgb(52, 44, 37);
}

.rkljfb-gk6SMd {
  background-color: rgb(57, 49, 45);
  border-color: initial;
}

.rkljfb-npMLoc,
.rkljfb-ho7Xm {
  color: rgb(223, 222, 219);
}

.rkljfb-rVkNNe {
  background-image: initial;
  background-color: rgba(60, 64, 67, 0.6);
}

.rkljfb-H9tDt.rkljfb-f7Uine {
  background-color: initial;
}

.rkljfb-H9tDt::before {
  background-color: rgb(85, 36, 38);
}

.rkljfb-PUrR6d {
  color: rgb(38, 207, 218);
}

.rkljfb-uARhaf {
  color: rgba(255, 255, 255, 0.38);
}

md-checkbox div {
  color: rgba(255, 255, 255, 0.54);
}

.imEBDf-ij8cu {
  color: rgba(255, 255, 255, 0.54);
}

.nKbcUd-haAclf md-tab-item {
  color: rgba(255, 255, 255, 0.38);
}

.nKbcUd-haAclf.nKbcUd-haAclf md-tabs-wrapper {
  border-color: initial;
}

@media (max-width: 599px) {}

.gSOwbc-ij8cu {
  color: rgba(255, 255, 255, 0.54);
}

.h661ib-PLDbbf .md-button {
  color: rgb(255, 134, 148);
}

.V8G9F-sn54Q {
  background-color: rgba(135, 135, 135, 0.2);
}

.eDPeIf-hQbnHc {
  color: rgba(255, 255, 255, 0.54);
}

.eDPeIf-uke45d {
  color: rgba(255, 255, 255, 0.54);
}

.eDPeIf-u0pjoe {
  color: rgb(38, 207, 218);
}

.e4Lfqb-LefcV {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.e4Lfqb-Tcgp6d {
  color: rgb(255, 134, 148);
}

.e4Lfqb-ZzqJlb {
  background-image: url("https://www.gstatic.com/voice-fe/choose@2x.png");
  filter: invert(1);
}

.e4Lfqb-J4IFUc {
  background-image: url("https://www.gstatic.com/voice-fe/onboarding/wolverine/img_wolverine_number_480.png");
  filter: invert(1);
}

.e4Lfqb-XoJHMc {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.12);
}

.e4Lfqb-zRbvQe {
  background-color: rgb(38, 38, 38);
}

.e4Lfqb-zRbvQe:last-child .e4Lfqb-hgDUwe {
  background-color: rgb(255, 0, 0);
}

.e4Lfqb-clz4Ic {
  background-color: rgb(38, 38, 38);
}

.e4Lfqb-pZu70e {
  border-color: rgba(0, 0, 0, 0.12);
}

.e4Lfqb-DPCJjc.e4Lfqb-DPCJjc {
  background-color: rgb(55, 55, 55);
}

.e4Lfqb-ix5fpc {
  background-color: rgb(38, 38, 38);
  color: rgba(255, 255, 255, 0.54);
}

.e4Lfqb-ekJ8Bb {
  background-color: rgb(38, 38, 38);
}

.e4Lfqb-Vw0GJc {
  background-color: rgba(135, 135, 135, 0.2);
}

.e4Lfqb-L6uhBb {
  background-color: rgba(38, 38, 38, 0.54);
}

.e4Lfqb-Hd57vc {
  background-color: rgb(38, 38, 38);
}

.e4Lfqb-aVTXAb {
  background-color: rgb(38, 38, 38);
}

.e4Lfqb-Cqsp {
  background-color: rgb(43, 43, 43);
}

@media (max-height: 900px) {}

@media (max-width: 599px) {}

.e4Lfqb-tdSJlc {
  color: rgb(160, 156, 151);
}

.shBpM-K92Tbc h2 {
  color: rgba(255, 255, 255, 0.54);
}

.shBpM-L6uhBb {
  background-color: rgba(38, 38, 38, 0.54);
}

.shBpM-XfOKDb {
  background-color: rgb(38, 38, 38);
}

.shBpM-Hd57vc {
  background-color: rgb(38, 38, 38);
}

@media (max-width: 599px) {}

.shBpM-K92Tbc {
  background-color: rgb(38, 38, 38);
}

.rgRBid-t5BBbf {
  background-image: url("https://www.gstatic.com/voice-fe/welcome@2x.png");
  filter: invert(1);
}

.rgRBid-q8bnUb {
  color: rgba(255, 255, 255, 0.54);
}

@media (max-width: 599px) {}

.Uccphe-LqWCJb {
  background-image: url("https://www.gstatic.com/voice-fe/verify@2x.png");
  filter: invert(1);
}

.Uccphe-HiaYvf {
  background-image: url("https://www.gstatic.com/voice-fe/onboarding/wolverine/img_wolverine_link.png");
  filter: invert(1);
}

.Uccphe-L6uhBb {
  background-color: rgba(38, 38, 38, 0.54);
}

.Uccphe-Hd57vc {
  background-color: rgb(38, 38, 38);
}

@media (max-width: 599px) {}

.YpDAse-GB63Z {
  background-image: url("https://www.gstatic.com/voice-fe/finish@2x.png");
  filter: invert(1);
}

.YpDAse-HiaYvf {
  background-image: url("https://www.gstatic.com/voice-fe/onboarding/number.png");
  filter: invert(1);
}

.YpDAse-dPfu8b {
  background-image: url("https://www.gstatic.com/voice-fe/onboarding/wolverine/img_wolverine_number_480.png");
  filter: invert(1);
}

@media (max-width: 599px) {}

.oZrM1b-zGlYcc {
  border-color: initial;
}

.oZrM1b-FE7Xw {
  border-top-color: rgba(0, 0, 0, 0.12);
}

@media (max-height: 800px) {}

.GHQeBe-t8Azuc {
  color: rgba(255, 255, 255, 0.54);
}

.GHQeBe-eEPyi {
  color: rgb(147, 153, 156);
}

.GHQeBe-ItvKz {
  border-top-color: initial;
}

.GHQeBe-jwZwb {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.GHQeBe-zMQSbb {
  background-image: initial;
  background-color: rgb(38, 50, 56);
  color: rgb(255, 255, 255);
}

.GHQeBe-zMQSbb .GHQeBe-wKtwcc,
.GHQeBe-zMQSbb .GHQeBe-jOfkMb,
.GHQeBe-zMQSbb .GHQeBe-qdm4Zd,
.GHQeBe-zMQSbb .GHQeBe-NbF93c {
  color: rgb(255, 255, 255);
}

.GHQeBe-RO4Ryc.GHQeBe-RO4Ryc {
  box-shadow: none;
}

.GHQeBe-H9tDt {
  background-color: rgb(38, 38, 38);
  border-left-color: rgba(0, 0, 0, 0.12);
}

.GHQeBe-BLdrxc {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgba(0, 0, 0, 0.12);
  border-top-color: rgba(0, 0, 0, 0.12);
}

.GHQeBe-NbF93c {
  background-color: rgba(60, 64, 67, 0.65);
  border-color: rgb(38, 38, 38);
}

@media (max-height: 800px) {}

@keyframes fade-out {
  0% {}
  100% {}
}

.GHQeBe-zMQSbb {
  background-color: rgb(32, 33, 36);
}

.GHQeBe-H9tDt {
  box-shadow: rgba(66, 69, 73, 0.15) 0px 3px 6px 2px;
}

.GHQeBe-wKtwcc,
.GHQeBe-jOfkMb {
  color: rgb(160, 156, 151);
}

.GHQeBe-qdm4Zd {
  color: rgb(223, 222, 219);
}

@media (max-height: 800px) {}

.RTVTod-YPqjbf.RTVTod-YPqjbf {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  color: rgb(161, 156, 150);
}

.RTVTod-vhZMvf .RTVTod-YPqjbf {
  border-color: rgba(0, 0, 0, 0);
}

.RTVTod-H9tDt {
  box-shadow: rgba(66, 69, 73, 0.15) 0px 3px 6px 2px;
}

.RTVTod-bIP4D {
  background-color: rgba(38, 38, 38, 0.5);
}

@keyframes fade-in {
  0% {}
  100% {}
}

@keyframes fade-out {
  0% {}
  100% {}
}

@keyframes slide-in {
  0% {}
  100% {}
}

@keyframes slide-out {
  0% {}
  100% {}
}

.TF50hf-H9tDt {
  background-color: rgb(38, 38, 38);
  box-shadow: rgba(66, 69, 73, 0.15) 0px 3px 6px 2px;
}

@media (min-width: 1280px) {}

.YYoZ8c-VeKiLd .YYoZ8c-NkdnBe:not([disabled]) {
  background-color: rgb(26, 115, 232);
}

.YYoZ8c-VeKiLd .YYoZ8c-NkdnBe.YYoZ8c-NkdnBe:not([disabled]):hover,
.YYoZ8c-VeKiLd .YYoZ8c-NkdnBe.YYoZ8c-NkdnBe:not([disabled]):focus {
  background-color: rgb(225, 144, 13);
}

.YYoZ8c-ItvKz {
  box-shadow: rgba(60, 64, 67, 0.15) 0px -5px 5px -3px;
}

.YYoZ8c-VeKiLd .YYoZ8c-YPqjbf {
  border-bottom-color: rgba(0, 0, 0, 0);
}

md-input-container.YYoZ8c-vhZMvf:not(.md-input-invalid).md-input-focused .YYoZ8c-YPqjbf {
  border-bottom-color: rgba(0, 0, 0, 0);
}

.mat-form-field-infix {
  border-top-color: rgba(0, 0, 0, 0);
}

@media print {}

.cdk-visually-hidden {
  border-color: initial;
}

.cdk-overlay-dark-backdrop {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.32);
}

@keyframes cdk-text-field-autofill-start {}

@keyframes cdk-text-field-autofill-end {}

.mat-ripple-element {
  background-color: rgba(0, 0, 0, 0.1);
}

.mat-option {
  color: rgb(223, 222, 219);
}

.mat-option:hover:not(.mat-option-disabled),
.mat-option:focus:not(.mat-option-disabled),
.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.mat-option.mat-active {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgb(223, 222, 219);
}

.mat-option.mat-option-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(255, 134, 148);
}

.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(160, 156, 151);
}

.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(38, 207, 218);
}

.mat-optgroup-label {
  color: rgb(160, 156, 151);
}

.mat-optgroup-disabled .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.38);
}

.mat-pseudo-checkbox {
  color: rgb(160, 156, 151);
}

.mat-pseudo-checkbox::after {
  color: rgb(255, 255, 255);
}

.mat-pseudo-checkbox-disabled {
  color: rgb(176, 176, 176);
}

.mat-primary .mat-pseudo-checkbox-checked,
.mat-primary .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.mat-pseudo-checkbox-checked,
.mat-pseudo-checkbox-indeterminate,
.mat-accent .mat-pseudo-checkbox-checked,
.mat-accent .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.mat-warn .mat-pseudo-checkbox-checked,
.mat-warn .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-image: initial;
  background-color: rgb(117, 117, 117);
}

.mat-app-background {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-elevation-z0 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-elevation-z1 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.mat-elevation-z2 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.mat-elevation-z3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.mat-elevation-z4 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.mat-elevation-z5 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
}

.mat-elevation-z6 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.mat-elevation-z7 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
}

.mat-elevation-z8 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.mat-elevation-z9 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
}

.mat-elevation-z10 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
}

.mat-elevation-z11 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
}

.mat-elevation-z12 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.mat-elevation-z13 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

.mat-elevation-z14 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
}

.mat-elevation-z15 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}

.mat-elevation-z16 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.mat-elevation-z17 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
}

.mat-elevation-z18 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
}

.mat-elevation-z19 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
}

.mat-elevation-z20 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
}

.mat-elevation-z21 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
}

.mat-elevation-z22 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
}

.mat-elevation-z23 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
}

.mat-elevation-z24 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
}

.mat-autocomplete-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-autocomplete-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {
  color: rgb(223, 222, 219);
}

.mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.mat-badge-accent .mat-badge-content {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-badge-warn .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.mat-badge-disabled .mat-badge-content {
  background-image: initial;
  background-color: rgb(104, 104, 104);
  color: rgba(255, 255, 255, 0.38);
}

.mat-bottom-sheet-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-button,
.mat-icon-button,
.mat-stroked-button {
  color: inherit;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.mat-button.mat-primary,
.mat-icon-button.mat-primary,
.mat-stroked-button.mat-primary {
  color: rgb(255, 134, 148);
}

.mat-button.mat-accent,
.mat-icon-button.mat-accent,
.mat-stroked-button.mat-accent {
  color: rgb(160, 156, 151);
}

.mat-button.mat-warn,
.mat-icon-button.mat-warn,
.mat-stroked-button.mat-warn {
  color: rgb(38, 207, 218);
}

.mat-button.mat-primary.mat-button-disabled,
.mat-button.mat-accent.mat-button-disabled,
.mat-button.mat-warn.mat-button-disabled,
.mat-button.mat-button-disabled.mat-button-disabled,
.mat-icon-button.mat-primary.mat-button-disabled,
.mat-icon-button.mat-accent.mat-button-disabled,
.mat-icon-button.mat-warn.mat-button-disabled,
.mat-icon-button.mat-button-disabled.mat-button-disabled,
.mat-stroked-button.mat-primary.mat-button-disabled,
.mat-stroked-button.mat-accent.mat-button-disabled,
.mat-stroked-button.mat-warn.mat-button-disabled,
.mat-stroked-button.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.mat-button.mat-primary .mat-button-focus-overlay,
.mat-icon-button.mat-primary .mat-button-focus-overlay,
.mat-stroked-button.mat-primary .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.mat-button.mat-accent .mat-button-focus-overlay,
.mat-icon-button.mat-accent .mat-button-focus-overlay,
.mat-stroked-button.mat-accent .mat-button-focus-overlay {
  background-color: rgb(95, 99, 104);
}

.mat-button.mat-warn .mat-button-focus-overlay,
.mat-icon-button.mat-warn .mat-button-focus-overlay,
.mat-stroked-button.mat-warn .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.mat-button.mat-button-disabled .mat-button-focus-overlay,
.mat-icon-button.mat-button-disabled .mat-button-focus-overlay,
.mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.mat-button .mat-ripple-element,
.mat-icon-button .mat-ripple-element,
.mat-stroked-button .mat-ripple-element {
  background-color: currentcolor;
}

.mat-button-focus-overlay {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.mat-stroked-button:not(.mat-button-disabled) {
  border-color: rgb(79, 74, 66);
}

.mat-flat-button,
.mat-raised-button,
.mat-fab,
.mat-mini-fab {
  color: rgb(223, 222, 219);
  background-color: rgb(38, 38, 38);
}

.mat-flat-button.mat-primary,
.mat-raised-button.mat-primary,
.mat-fab.mat-primary,
.mat-mini-fab.mat-primary,
.mat-flat-button.mat-accent,
.mat-raised-button.mat-accent,
.mat-fab.mat-accent,
.mat-mini-fab.mat-accent,
.mat-flat-button.mat-warn,
.mat-raised-button.mat-warn,
.mat-fab.mat-warn,
.mat-mini-fab.mat-warn {
  color: rgb(255, 255, 255);
}

.mat-flat-button.mat-primary.mat-button-disabled,
.mat-flat-button.mat-accent.mat-button-disabled,
.mat-flat-button.mat-warn.mat-button-disabled,
.mat-flat-button.mat-button-disabled.mat-button-disabled,
.mat-raised-button.mat-primary.mat-button-disabled,
.mat-raised-button.mat-accent.mat-button-disabled,
.mat-raised-button.mat-warn.mat-button-disabled,
.mat-raised-button.mat-button-disabled.mat-button-disabled,
.mat-fab.mat-primary.mat-button-disabled,
.mat-fab.mat-accent.mat-button-disabled,
.mat-fab.mat-warn.mat-button-disabled,
.mat-fab.mat-button-disabled.mat-button-disabled,
.mat-mini-fab.mat-primary.mat-button-disabled,
.mat-mini-fab.mat-accent.mat-button-disabled,
.mat-mini-fab.mat-warn.mat-button-disabled,
.mat-mini-fab.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.mat-flat-button.mat-primary,
.mat-raised-button.mat-primary,
.mat-fab.mat-primary,
.mat-mini-fab.mat-primary {
  background-color: rgb(0, 121, 107);
}

.mat-flat-button.mat-accent,
.mat-raised-button.mat-accent,
.mat-fab.mat-accent,
.mat-mini-fab.mat-accent {
  background-color: rgb(95, 99, 104);
}

.mat-flat-button.mat-warn,
.mat-raised-button.mat-warn,
.mat-fab.mat-warn,
.mat-mini-fab.mat-warn {
  background-color: rgb(217, 48, 37);
}

.mat-flat-button.mat-primary.mat-button-disabled,
.mat-flat-button.mat-accent.mat-button-disabled,
.mat-flat-button.mat-warn.mat-button-disabled,
.mat-flat-button.mat-button-disabled.mat-button-disabled,
.mat-raised-button.mat-primary.mat-button-disabled,
.mat-raised-button.mat-accent.mat-button-disabled,
.mat-raised-button.mat-warn.mat-button-disabled,
.mat-raised-button.mat-button-disabled.mat-button-disabled,
.mat-fab.mat-primary.mat-button-disabled,
.mat-fab.mat-accent.mat-button-disabled,
.mat-fab.mat-warn.mat-button-disabled,
.mat-fab.mat-button-disabled.mat-button-disabled,
.mat-mini-fab.mat-primary.mat-button-disabled,
.mat-mini-fab.mat-accent.mat-button-disabled,
.mat-mini-fab.mat-warn.mat-button-disabled,
.mat-mini-fab.mat-button-disabled.mat-button-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}

.mat-flat-button.mat-primary .mat-ripple-element,
.mat-raised-button.mat-primary .mat-ripple-element,
.mat-fab.mat-primary .mat-ripple-element,
.mat-mini-fab.mat-primary .mat-ripple-element,
.mat-flat-button.mat-accent .mat-ripple-element,
.mat-raised-button.mat-accent .mat-ripple-element,
.mat-fab.mat-accent .mat-ripple-element,
.mat-mini-fab.mat-accent .mat-ripple-element,
.mat-flat-button.mat-warn .mat-ripple-element,
.mat-raised-button.mat-warn .mat-ripple-element,
.mat-fab.mat-warn .mat-ripple-element,
.mat-mini-fab.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.mat-stroked-button:not([class*="mat-elevation-z"]),
.mat-flat-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-raised-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.mat-raised-button:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.mat-raised-button.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-fab:not([class*="mat-elevation-z"]),
.mat-mini-fab:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.mat-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]),
.mat-mini-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.mat-fab.mat-button-disabled:not([class*="mat-elevation-z"]),
.mat-mini-fab.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-button-toggle-standalone,
.mat-button-toggle-group {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  box-shadow: none;
}

.mat-button-toggle {
  color: rgba(255, 255, 255, 0.38);
}

.mat-button-toggle .mat-button-toggle-focus-overlay {
  background-color: rgba(0, 0, 0, 0.12);
}

.mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: rgb(0, 0, 0);
}

.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: rgb(79, 74, 66);
}

[dir="rtl"] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: initial;
  border-top-color: rgb(79, 74, 66);
}

.mat-button-toggle-checked {
  background-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.mat-button-toggle-checked.mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
}

.mat-button-toggle-disabled {
  color: rgba(255, 255, 255, 0.26);
  background-color: rgb(66, 60, 51);
}

.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: rgb(107, 101, 92);
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-color: rgb(79, 74, 66);
}

.mat-card {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-card:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.mat-card.mat-card-flat:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-card-subtitle {
  color: rgb(160, 156, 151);
}

.mat-checkbox-frame {
  border-color: rgb(95, 99, 104);
}

.mat-checkbox-mixedmark {
  background-color: rgb(38, 38, 38);
}

.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background,
.mat-checkbox-checked.mat-primary .mat-checkbox-background {
  background-color: rgb(0, 121, 107);
}

.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
.mat-checkbox-checked.mat-accent .mat-checkbox-background {
  background-color: rgb(95, 99, 104);
}

.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background,
.mat-checkbox-checked.mat-warn .mat-checkbox-background {
  background-color: rgb(217, 48, 37);
}

.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,
.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {
  background-color: rgb(117, 117, 117);
}

.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {
  border-color: rgb(117, 117, 117);
}

.mat-checkbox-disabled .mat-checkbox-label {
  color: rgb(160, 156, 151);
}

.mat-checkbox .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,
.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,
.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,
.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.mat-chip.mat-standard-chip {
  background-color: rgb(79, 74, 66);
  color: rgb(223, 222, 219);
}

.mat-chip.mat-standard-chip .mat-chip-remove {
  color: rgb(223, 222, 219);
}

.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.mat-chip.mat-standard-chip::after {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.mat-table {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-table thead,
.mat-table tbody,
.mat-table tfoot,
mat-header-row,
mat-row,
mat-footer-row,
[mat-header-row],
[mat-row],
[mat-footer-row],
.mat-table-sticky {
  background-image: inherit;
  background-color: inherit;
}

mat-row,
mat-header-row,
mat-footer-row,
th.mat-header-cell,
td.mat-cell,
td.mat-footer-cell {
  border-bottom-color: rgb(79, 74, 66);
}

.mat-header-cell {
  color: rgb(160, 156, 151);
}

.mat-cell,
.mat-footer-cell {
  color: rgb(223, 222, 219);
}

.mat-calendar-arrow {
  border-top-color: rgb(95, 99, 104);
}

.mat-datepicker-toggle,
.mat-datepicker-content .mat-calendar-next-button,
.mat-datepicker-content .mat-calendar-previous-button {
  color: rgb(160, 156, 151);
}

.mat-calendar-table-header {
  color: rgba(255, 255, 255, 0.38);
}

.mat-calendar-table-header-divider::after {
  background-image: initial;
  background-color: rgb(79, 74, 66);
}

.mat-calendar-body-label {
  color: rgb(160, 156, 151);
}

.mat-calendar-body-cell-content,
.mat-date-range-input-separator {
  color: rgb(223, 222, 219);
  border-color: rgba(0, 0, 0, 0);
}

.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.mat-form-field-disabled .mat-date-range-input-separator {
  color: rgba(255, 255, 255, 0.38);
}

.VxS2Ke-HrRdod-qJTHM-bEDTcc-bVEB4e {
  color: rgb(218, 220, 224);
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.38);
}

.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.18);
}

.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(0, 121, 107, 0.2);
}

.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to right, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

[dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to left, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

[dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.mat-calendar-body-selected {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(0, 121, 107, 0.4);
}

.mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(0, 121, 107, 0.3);
}

.mat-datepicker-content {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.2);
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.mat-datepicker-content.mat-accent .mat-calendar-body-selected {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(95, 99, 104, 0.4);
}

.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(95, 99, 104, 0.3);
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(217, 48, 37, 0.2);
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.mat-datepicker-content.mat-warn .mat-calendar-body-selected {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(217, 48, 37, 0.4);
}

.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(217, 48, 37, 0.3);
}

.mat-datepicker-content-touch {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.mat-datepicker-toggle-active {
  color: rgb(255, 134, 148);
}

.mat-datepicker-toggle-active.mat-accent {
  color: rgb(160, 156, 151);
}

.mat-datepicker-toggle-active.mat-warn {
  color: rgb(38, 207, 218);
}

.VxS2Ke-gElRsf-vhhrIe-YPqjbf-SmKAyb[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.mat-dialog-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-divider {
  border-top-color: rgb(79, 74, 66);
}

.mat-divider-vertical {
  border-right-color: rgb(79, 74, 66);
}

.mat-expansion-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-expansion-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.mat-action-row {
  border-top-color: rgb(79, 74, 66);
}

.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled="true"]),
.mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled="true"]),
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled="true"]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled="true"]) .mat-expansion-panel-header:hover {
    background-image: initial;
    background-color: rgb(38, 38, 38);
  }
}

.mat-expansion-panel-header-title {
  color: rgb(223, 222, 219);
}

.mat-expansion-panel-header-description {
  color: rgb(160, 156, 151);
}

.mat-expansion-indicator::after {
  color: rgb(160, 156, 151);
}

.mat-expansion-panel-header[aria-disabled="true"] {
  color: rgba(255, 255, 255, 0.26);
}

.mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-form-field.mat-focused .mat-form-field-label {
  color: rgb(255, 134, 148);
}

.mat-form-field.mat-focused .mat-form-field-label.mat-accent {
  color: rgb(160, 156, 151);
}

.mat-form-field.mat-focused .mat-form-field-label.mat-warn {
  color: rgb(38, 207, 218);
}

.mat-focused .mat-form-field-required-marker {
  color: rgb(160, 156, 151);
}

.mat-form-field-ripple {
  background-color: rgba(79, 74, 66, 0.87);
}

.mat-form-field.mat-focused .mat-form-field-ripple {
  background-color: rgb(0, 121, 107);
}

.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {
  background-color: rgb(95, 99, 104);
}

.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {
  background-color: rgb(217, 48, 37);
}

.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {
  color: rgb(255, 134, 148);
}

.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after,
.mat-form-field.mat-form-field-invalid .mat-form-field-label,
.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {
  color: rgb(38, 207, 218);
}

.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {
  background-color: rgb(217, 48, 37);
}

.mat-error {
  color: rgb(38, 207, 218);
}

.mat-form-field-appearance-legacy .mat-form-field-label,
.mat-form-field-appearance-legacy .mat-hint {
  color: rgb(160, 156, 151);
}

.mat-form-field-appearance-legacy .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.mat-form-field-appearance-standard .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.mat-form-field-appearance-fill .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.04);
}

.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.02);
}

.mat-form-field-appearance-fill .mat-form-field-underline::before {
  background-color: rgba(79, 74, 66, 0.42);
}

.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {
  background-color: rgba(0, 0, 0, 0);
}

.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
  color: rgb(255, 134, 148);
}

.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {
  color: rgb(160, 156, 151);
}

.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,
.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {
  color: rgb(38, 207, 218);
}

.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.mat-icon.mat-primary {
  color: rgb(255, 134, 148);
}

.mat-icon.mat-accent {
  color: rgb(160, 156, 151);
}

.mat-icon.mat-warn {
  color: rgb(38, 207, 218);
}

.mat-form-field-type-mat-native-select .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.mat-input-element:disabled,
.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.38);
}

.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
  color: rgb(38, 207, 218);
}

.mat-list-base .mat-list-item,
.mat-list-base .mat-list-option {
  color: rgb(223, 222, 219);
}

.mat-list-base .mat-subheader {
  color: rgb(160, 156, 151);
}

.mat-list-item-disabled {
  background-color: rgb(66, 60, 51);
}

.mat-list-option:hover,
.mat-list-option:focus,
.mat-nav-list .mat-list-item:hover,
.mat-nav-list .mat-list-item:focus,
.mat-action-list .mat-list-item:hover,
.mat-action-list .mat-list-item:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.mat-list-single-selected-option,
.mat-list-single-selected-option:hover,
.mat-list-single-selected-option:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.mat-menu-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-menu-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.mat-menu-item {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(223, 222, 219);
}

.mat-menu-item[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.mat-menu-item[disabled]::after {
  color: rgba(255, 255, 255, 0.38);
}

.mat-menu-item[disabled] .mat-icon-no-color {
  color: rgba(255, 255, 255, 0.38);
}

.mat-menu-item .mat-icon-no-color {
  color: rgb(160, 156, 151);
}

.mat-menu-item-submenu-trigger::after {
  color: rgb(160, 156, 151);
}

.mat-menu-item:hover:not([disabled]),
.mat-menu-item.cdk-program-focused:not([disabled]),
.mat-menu-item.cdk-keyboard-focused:not([disabled]),
.mat-menu-item-highlighted:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.mat-paginator {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(160, 156, 151);
}

.mat-paginator-page-size .mat-select-trigger {
  color: rgb(160, 156, 151);
}

.mat-paginator-decrement,
.mat-paginator-increment {
  border-top-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
}

.mat-paginator-first,
.mat-paginator-last {
  border-top-color: rgb(95, 99, 104);
}

.mat-icon-button[disabled] .mat-paginator-decrement,
.mat-icon-button[disabled] .mat-paginator-increment,
.mat-icon-button[disabled] .mat-paginator-first,
.mat-icon-button[disabled] .mat-paginator-last {
  border-color: rgba(0, 0, 0, 0.38);
}

.mat-progress-bar-buffer {
  background-color: rgb(114, 59, 66);
}

.mat-progress-bar-fill::after {
  background-color: rgb(0, 121, 107);
}

.mat-progress-bar.mat-accent .mat-progress-bar-buffer {
  background-color: rgb(79, 77, 75);
}

.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {
  background-color: rgb(95, 99, 104);
}

.mat-progress-bar.mat-warn .mat-progress-bar-buffer {
  background-color: rgb(20, 115, 120);
}

.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {
  background-color: rgb(217, 48, 37);
}

.mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(0, 121, 107);
}

.mat-radio-button.mat-primary .mat-radio-inner-circle,
.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {
  background-color: rgb(0, 121, 107);
}

.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.mat-radio-button.mat-accent .mat-radio-inner-circle,
.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {
  background-color: rgb(95, 99, 104);
}

.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(217, 48, 37);
}

.mat-radio-button.mat-warn .mat-radio-inner-circle,
.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {
  background-color: rgb(217, 48, 37);
}

.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {
  border-color: rgba(0, 0, 0, 0.38);
}

.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {
  background-color: rgba(0, 0, 0, 0.38);
}

.mat-radio-button.mat-radio-disabled .mat-radio-label-content {
  color: rgba(255, 255, 255, 0.38);
}

.mat-radio-button .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.mat-select-value {
  color: rgb(223, 222, 219);
}

.mat-select-disabled .mat-select-value {
  color: rgba(255, 255, 255, 0.38);
}

.mat-select-arrow {
  color: rgb(160, 156, 151);
}

.mat-select-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-select-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.mat-form-field.mat-focused.mat-primary .mat-select-arrow {
  color: rgb(255, 134, 148);
}

.mat-form-field.mat-focused.mat-accent .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.mat-form-field.mat-focused.mat-warn .mat-select-arrow,
.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {
  color: rgb(38, 207, 218);
}

.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {
  color: rgba(255, 255, 255, 0.38);
}

.mat-drawer-container,
.mat-drawer {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-drawer.mat-drawer-push {
  background-color: rgb(38, 38, 38);
}

.mat-drawer:not(.mat-drawer-side) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.mat-drawer-side {
  border-right-color: rgb(79, 74, 66);
}

.mat-drawer-side.mat-drawer-end,
[dir="rtl"] .mat-drawer-side {
  border-left-color: rgb(79, 74, 66);
  border-right-color: initial;
}

[dir="rtl"] .mat-drawer-side.mat-drawer-end {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.mat-drawer-backdrop.mat-drawer-shown {
  background-color: rgba(0, 0, 0, 0.6);
}

.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(95, 99, 104);
}

.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(95, 99, 104, 0.54);
}

.mat-slide-toggle.mat-checked .mat-ripple-element {
  background-color: rgb(95, 99, 104);
}

.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(0, 121, 107);
}

.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(0, 121, 107, 0.54);
}

.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {
  background-color: rgb(0, 121, 107);
}

.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(217, 48, 37);
}

.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(217, 48, 37, 0.54);
}

.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {
  background-color: rgb(217, 48, 37);
}

.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.mat-slide-toggle-thumb {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: rgb(43, 43, 43);
}

.mat-slide-toggle-bar {
  background-color: rgba(0, 0, 0, 0.38);
}

.mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.mat-primary .mat-slider-track-fill,
.mat-primary .mat-slider-thumb,
.mat-primary .mat-slider-thumb-label {
  background-color: rgb(0, 121, 107);
}

.mat-primary .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.mat-primary .mat-slider-focus-ring {
  background-color: rgba(0, 121, 107, 0.2);
}

.mat-accent .mat-slider-track-fill,
.mat-accent .mat-slider-thumb,
.mat-accent .mat-slider-thumb-label {
  background-color: rgb(95, 99, 104);
}

.mat-accent .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.mat-accent .mat-slider-focus-ring {
  background-color: rgba(95, 99, 104, 0.2);
}

.mat-warn .mat-slider-track-fill,
.mat-warn .mat-slider-thumb,
.mat-warn .mat-slider-thumb-label {
  background-color: rgb(217, 48, 37);
}

.mat-warn .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.mat-warn .mat-slider-focus-ring {
  background-color: rgba(217, 48, 37, 0.2);
}

.mat-slider:hover .mat-slider-track-background,
.cdk-focused .mat-slider-track-background {
  background-color: rgba(0, 0, 0, 0.38);
}

.mat-slider-disabled .mat-slider-track-background,
.mat-slider-disabled .mat-slider-track-fill,
.mat-slider-disabled .mat-slider-thumb,
.mat-slider-disabled:hover .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.mat-slider-min-value .mat-slider-focus-ring {
  background-color: rgba(0, 0, 0, 0.12);
}

.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {
  background-color: rgb(32, 33, 36);
}

.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {
  background-color: rgb(107, 101, 92);
}

.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
  background-color: rgba(0, 0, 0, 0);
}

.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb,
.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {
  border-color: rgba(0, 0, 0, 0.38);
}

.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb,
.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
}

.mat-slider-has-ticks .mat-slider-wrapper::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.mat-slider-horizontal .mat-slider-ticks {
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.mat-slider-vertical .mat-slider-ticks {
  background-image: repeating-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.mat-step-header.cdk-keyboard-focused,
.mat-step-header.cdk-program-focused,
.mat-step-header:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .mat-step-header:hover {
    background-image: none;
    background-color: initial;
  }
}

.mat-step-header .mat-step-label,
.mat-step-header .mat-step-optional {
  color: rgb(160, 156, 151);
}

.mat-step-header .mat-step-icon {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-step-header .mat-step-icon-selected,
.mat-step-header .mat-step-icon-state-done,
.mat-step-header .mat-step-icon-state-edit {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.mat-step-header.mat-accent .mat-step-icon {
  color: rgb(255, 255, 255);
}

.mat-step-header.mat-accent .mat-step-icon-selected,
.mat-step-header.mat-accent .mat-step-icon-state-done,
.mat-step-header.mat-accent .mat-step-icon-state-edit {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-step-header.mat-warn .mat-step-icon {
  color: rgb(255, 255, 255);
}

.mat-step-header.mat-warn .mat-step-icon-selected,
.mat-step-header.mat-warn .mat-step-icon-state-done,
.mat-step-header.mat-warn .mat-step-icon-state-edit {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.mat-step-header .mat-step-icon-state-error {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.mat-step-header .mat-step-label.mat-step-label-active {
  color: rgb(223, 222, 219);
}

.mat-step-header .mat-step-label.mat-step-label-error {
  color: rgb(38, 207, 218);
}

.mat-stepper-horizontal,
.mat-stepper-vertical {
  background-color: rgb(38, 38, 38);
}

.mat-stepper-vertical-line::before {
  border-left-color: rgb(79, 74, 66);
}

.mat-horizontal-stepper-header::before {
  border-top-color: rgb(79, 74, 66);
}

.mat-horizontal-stepper-header::after {
  border-top-color: rgb(79, 74, 66);
}

.mat-stepper-horizontal-line {
  border-top-color: rgb(79, 74, 66);
}

.mat-sort-header-arrow {
  color: rgb(160, 156, 151);
}

.mat-tab-nav-bar,
.mat-tab-header {
  border-bottom-color: rgb(79, 74, 66);
}

.mat-tab-group-inverted-header .mat-tab-nav-bar,
.mat-tab-group-inverted-header .mat-tab-header {
  border-top-color: rgb(79, 74, 66);
  border-bottom-color: initial;
}

.mat-tab-label,
.mat-tab-link {
  color: rgb(223, 222, 219);
}

.mat-tab-label.mat-tab-disabled,
.mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.mat-tab-header-pagination-chevron {
  border-color: rgb(32, 33, 36);
}

.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(0, 0, 0, 0.38);
}

.mat-tab-group[class*="mat-background-"] .mat-tab-header,
.mat-tab-nav-bar[class*="mat-background-"] {
  border-bottom-color: initial;
  border-top-color: initial;
}

.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.mat-tab-group.mat-primary .mat-ink-bar,
.mat-tab-nav-bar.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,
.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.mat-tab-group.mat-accent .mat-ink-bar,
.mat-tab-nav-bar.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,
.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.mat-tab-group.mat-warn .mat-ink-bar,
.mat-tab-nav-bar.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,
.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.mat-tab-group.mat-background-primary>.mat-tab-header,
.mat-tab-group.mat-background-primary>.mat-tab-link-container,
.mat-tab-group.mat-background-primary>.mat-tab-header-pagination,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination {
  background-color: rgb(0, 121, 107);
}

.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,
.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-group.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,
.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,
.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.mat-tab-group.mat-background-accent>.mat-tab-header,
.mat-tab-group.mat-background-accent>.mat-tab-link-container,
.mat-tab-group.mat-background-accent>.mat-tab-header-pagination,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination {
  background-color: rgb(95, 99, 104);
}

.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,
.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-group.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,
.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,
.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.mat-tab-group.mat-background-warn>.mat-tab-header,
.mat-tab-group.mat-background-warn>.mat-tab-link-container,
.mat-tab-group.mat-background-warn>.mat-tab-header-pagination,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination {
  background-color: rgb(217, 48, 37);
}

.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,
.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,
.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,
.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.mat-toolbar {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  color: rgb(223, 222, 219);
}

.mat-toolbar.mat-primary {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.mat-toolbar.mat-accent {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.mat-toolbar.mat-warn {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentcolor;
}

.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}

@media (max-width: 599px) {}

.mat-tooltip {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.9);
}

.mat-tree {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.mat-tree-node,
.mat-nested-tree-node {
  color: rgb(223, 222, 219);
}

.mat-snack-bar-container {
  color: rgba(255, 255, 255, 0.7);
  background-image: initial;
  background-color: rgb(50, 50, 50);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.mat-simple-snackbar-action {
  color: rgb(160, 156, 151);
}

.gmat-tabs.mat-primary .mat-tab-label,
.gmat-tabs.mat-primary .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gmat-tabs.mat-primary .mat-tab-label.mat-tab-label-active,
.gmat-tabs.mat-primary .mat-tab-link.mat-tab-label-active {
  color: rgb(255, 134, 148);
}

.gmat-tabs.mat-primary .mat-tab-label.mat-tab-disabled,
.gmat-tabs.mat-primary .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gmat-tabs.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.gmat-tabs.mat-accent .mat-tab-label,
.gmat-tabs.mat-accent .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gmat-tabs.mat-accent .mat-tab-label.mat-tab-label-active,
.gmat-tabs.mat-accent .mat-tab-link.mat-tab-label-active {
  color: rgb(160, 156, 151);
}

.gmat-tabs.mat-accent .mat-tab-label.mat-tab-disabled,
.gmat-tabs.mat-accent .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gmat-tabs.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gmat-tabs.mat-warn .mat-tab-label,
.gmat-tabs.mat-warn .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gmat-tabs.mat-warn .mat-tab-label.mat-tab-label-active,
.gmat-tabs.mat-warn .mat-tab-link.mat-tab-label-active {
  color: rgb(38, 207, 218);
}

.gmat-tabs.mat-warn .mat-tab-label.mat-tab-disabled,
.gmat-tabs.mat-warn .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gmat-tabs.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gmat-tabs .mat-tab-label.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled),
.gmat-tabs .mat-tab-link.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled) {
  background-color: rgba(60, 64, 67, 0.12);
}

.gmat-tabs .mat-tab-label .mat-ripple-element,
.gmat-tabs .mat-tab-link .mat-ripple-element {
  background-color: rgba(0, 121, 107, 0.12);
}

.gmat-button .mat-flat-button:not([disabled]),
.gmat-button.mat-flat-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button:not([disabled]):focus,
.gmat-button .mat-flat-button:not([disabled]):hover,
.gmat-button.mat-flat-button:not([disabled]):focus,
.gmat-button.mat-flat-button:not([disabled]):hover,
.gmat-button .mat-flat-button:not([disabled]):focus,
.gmat-button .mat-flat-button:not([disabled]):hover,
.gmat-button.mat-flat-button:not([disabled]):focus,
.gmat-button.mat-flat-button:not([disabled]):hover,
.gmat-button .mat-flat-button:not([disabled]):focus,
.gmat-button .mat-flat-button:not([disabled]):hover,
.gmat-button.mat-flat-button:not([disabled]):focus,
.gmat-button.mat-flat-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-flat-button:not([disabled]):active,
.gmat-button.mat-flat-button:not([disabled]):active,
.gmat-button .mat-flat-button:not([disabled]):active,
.gmat-button.mat-flat-button:not([disabled]):active,
.gmat-button .mat-flat-button:not([disabled]):active,
.gmat-button.mat-flat-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gmat-button.mat-flat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button.mat-flat-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gmat-button.mat-flat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button.mat-flat-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-stroked-button,
.gmat-button.mat-stroked-button {
  border-color: rgb(57, 49, 45);
}

.gmat-button .mat-stroked-button:not([disabled]),
.gmat-button.mat-stroked-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(255, 134, 148);
}

.gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-stroked-button:not([disabled]):hover,
.gmat-button .mat-stroked-button:not([disabled]):focus,
.gmat-button.mat-stroked-button:not([disabled]):hover,
.gmat-button.mat-stroked-button:not([disabled]):focus {
  border-color: rgb(131, 54, 61);
}

.gmat-button .mat-stroked-button.mat-warn,
.gmat-button.mat-stroked-button.mat-warn {
  border-color: rgb(57, 49, 45);
}

.gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gmat-button.mat-stroked-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(38, 207, 218);
}

.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus {
  border-color: rgb(12, 110, 117);
}

.gmat-button .mat-stroked-button.mat-accent,
.gmat-button.mat-stroked-button.mat-accent {
  border-color: rgb(57, 49, 45);
}

.gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gmat-button.mat-stroked-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus {
  border-color: rgb(57, 49, 45);
}

.gmat-button .mat-raised-button,
.gmat-button.mat-raised-button,
.gmat-button .mat-raised-button,
.gmat-button.mat-raised-button,
.gmat-button .mat-raised-button,
.gmat-button.mat-raised-button {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gmat-button .mat-raised-button:not([disabled]),
.gmat-button.mat-raised-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button:not([disabled]):focus,
.gmat-button .mat-raised-button:not([disabled]):hover,
.gmat-button.mat-raised-button:not([disabled]):focus,
.gmat-button.mat-raised-button:not([disabled]):hover,
.gmat-button .mat-raised-button:not([disabled]):focus,
.gmat-button .mat-raised-button:not([disabled]):hover,
.gmat-button.mat-raised-button:not([disabled]):focus,
.gmat-button.mat-raised-button:not([disabled]):hover,
.gmat-button .mat-raised-button:not([disabled]):focus,
.gmat-button .mat-raised-button:not([disabled]):hover,
.gmat-button.mat-raised-button:not([disabled]):focus,
.gmat-button.mat-raised-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-raised-button:not([disabled]):active,
.gmat-button.mat-raised-button:not([disabled]):active,
.gmat-button .mat-raised-button:not([disabled]):active,
.gmat-button.mat-raised-button:not([disabled]):active,
.gmat-button .mat-raised-button:not([disabled]):active,
.gmat-button.mat-raised-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gmat-button.mat-raised-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button.mat-raised-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gmat-button.mat-raised-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button.mat-raised-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gmat-button .mat-button:not([disabled]),
.gmat-button.mat-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 134, 148);
}

.gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gmat-button .mat-button.mat-warn:not([disabled]),
.gmat-button.mat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gmat-button .mat-button.mat-accent:not([disabled]),
.gmat-button.mat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 156, 151);
}

.gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gmat-button .mat-flat-button[disabled],
.gmat-button .mat-stroked-button[disabled],
.gmat-button .mat-raised-button[disabled],
.gmat-button .mat-button[disabled],
.gmat-button.mat-flat-button[disabled],
.gmat-button.mat-stroked-button[disabled],
.gmat-button.mat-raised-button[disabled],
.gmat-button.mat-button[disabled],
.gmat-button .mat-flat-button[disabled],
.gmat-button .mat-stroked-button[disabled],
.gmat-button .mat-raised-button[disabled],
.gmat-button .mat-button[disabled],
.gmat-button.mat-flat-button[disabled],
.gmat-button.mat-stroked-button[disabled],
.gmat-button.mat-raised-button[disabled],
.gmat-button.mat-button[disabled],
.gmat-button .mat-flat-button[disabled],
.gmat-button .mat-stroked-button[disabled],
.gmat-button .mat-raised-button[disabled],
.gmat-button .mat-button[disabled],
.gmat-button.mat-flat-button[disabled],
.gmat-button.mat-stroked-button[disabled],
.gmat-button.mat-raised-button[disabled],
.gmat-button.mat-button[disabled] {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.xap-inline-dialog-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.mat-form-field-label,
.mat-hint {
  color: rgb(128, 134, 139);
}

.mat-form-field-appearance-outline .mat-form-field-outline,
.mat-form-field-appearance-outline .mat-form-field-outline-thick {
  color: rgb(218, 220, 224);
}

.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {
  color: rgba(218, 220, 224, 0.38);
}

.mat-input-element::placeholder {
  color: rgb(128, 134, 139);
}

.mat-input-element::-webkit-input-placeholder {
  color: rgb(128, 134, 139);
}

.gvHighContrast .mat-ripple-element {
  background-color: rgba(0, 0, 0, 0.1);
}

.gvHighContrast .mat-option {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-option:hover:not(.mat-option-disabled),
.gvHighContrast .mat-option:focus:not(.mat-option-disabled),
.gvHighContrast .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvHighContrast .mat-option.mat-active {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-option.mat-option-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-optgroup-label {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-optgroup-disabled .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-pseudo-checkbox {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-pseudo-checkbox::after {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-pseudo-checkbox-disabled {
  color: rgb(176, 176, 176);
}

.gvHighContrast .mat-primary .mat-pseudo-checkbox-checked,
.gvHighContrast .mat-primary .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-pseudo-checkbox-checked,
.gvHighContrast .mat-pseudo-checkbox-indeterminate,
.gvHighContrast .mat-accent .mat-pseudo-checkbox-checked,
.gvHighContrast .mat-accent .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-warn .mat-pseudo-checkbox-checked,
.gvHighContrast .mat-warn .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.gvHighContrast .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-image: initial;
  background-color: rgb(117, 117, 117);
}

.gvHighContrast .mat-app-background,
.gvHighContrast.mat-app-background {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-elevation-z0 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-elevation-z1 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvHighContrast .mat-elevation-z2 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvHighContrast .mat-elevation-z3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvHighContrast .mat-elevation-z4 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvHighContrast .mat-elevation-z5 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
}

.gvHighContrast .mat-elevation-z6 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvHighContrast .mat-elevation-z7 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
}

.gvHighContrast .mat-elevation-z8 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvHighContrast .mat-elevation-z9 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
}

.gvHighContrast .mat-elevation-z10 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
}

.gvHighContrast .mat-elevation-z11 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
}

.gvHighContrast .mat-elevation-z12 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvHighContrast .mat-elevation-z13 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

.gvHighContrast .mat-elevation-z14 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
}

.gvHighContrast .mat-elevation-z15 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}

.gvHighContrast .mat-elevation-z16 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvHighContrast .mat-elevation-z17 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
}

.gvHighContrast .mat-elevation-z18 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
}

.gvHighContrast .mat-elevation-z19 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
}

.gvHighContrast .mat-elevation-z20 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
}

.gvHighContrast .mat-elevation-z21 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
}

.gvHighContrast .mat-elevation-z22 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
}

.gvHighContrast .mat-elevation-z23 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
}

.gvHighContrast .mat-elevation-z24 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
}

.gvHighContrast .mat-autocomplete-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-autocomplete-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvHighContrast .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-badge-accent .mat-badge-content {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-badge-warn .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-badge-disabled .mat-badge-content {
  background-image: initial;
  background-color: rgb(104, 104, 104);
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-bottom-sheet-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-button,
.gvHighContrast .mat-icon-button,
.gvHighContrast .mat-stroked-button {
  color: inherit;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.gvHighContrast .mat-button.mat-primary,
.gvHighContrast .mat-icon-button.mat-primary,
.gvHighContrast .mat-stroked-button.mat-primary {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-button.mat-accent,
.gvHighContrast .mat-icon-button.mat-accent,
.gvHighContrast .mat-stroked-button.mat-accent {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-button.mat-warn,
.gvHighContrast .mat-icon-button.mat-warn,
.gvHighContrast .mat-stroked-button.mat-warn {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-icon-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-icon-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-icon-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-icon-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-stroked-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-stroked-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-stroked-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-stroked-button.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvHighContrast .mat-button.mat-primary .mat-button-focus-overlay,
.gvHighContrast .mat-icon-button.mat-primary .mat-button-focus-overlay,
.gvHighContrast .mat-stroked-button.mat-primary .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-button.mat-accent .mat-button-focus-overlay,
.gvHighContrast .mat-icon-button.mat-accent .mat-button-focus-overlay,
.gvHighContrast .mat-stroked-button.mat-accent .mat-button-focus-overlay {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-button.mat-warn .mat-button-focus-overlay,
.gvHighContrast .mat-icon-button.mat-warn .mat-button-focus-overlay,
.gvHighContrast .mat-stroked-button.mat-warn .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-button.mat-button-disabled .mat-button-focus-overlay,
.gvHighContrast .mat-icon-button.mat-button-disabled .mat-button-focus-overlay,
.gvHighContrast .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.gvHighContrast .mat-button .mat-ripple-element,
.gvHighContrast .mat-icon-button .mat-ripple-element,
.gvHighContrast .mat-stroked-button .mat-ripple-element {
  background-color: currentcolor;
}

.gvHighContrast .mat-button-focus-overlay {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-stroked-button:not(.mat-button-disabled) {
  border-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-flat-button,
.gvHighContrast .mat-raised-button,
.gvHighContrast .mat-fab,
.gvHighContrast .mat-mini-fab {
  color: rgb(255, 255, 255);
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-flat-button.mat-primary,
.gvHighContrast .mat-raised-button.mat-primary,
.gvHighContrast .mat-fab.mat-primary,
.gvHighContrast .mat-mini-fab.mat-primary,
.gvHighContrast .mat-flat-button.mat-accent,
.gvHighContrast .mat-raised-button.mat-accent,
.gvHighContrast .mat-fab.mat-accent,
.gvHighContrast .mat-mini-fab.mat-accent,
.gvHighContrast .mat-flat-button.mat-warn,
.gvHighContrast .mat-raised-button.mat-warn,
.gvHighContrast .mat-fab.mat-warn,
.gvHighContrast .mat-mini-fab.mat-warn {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-flat-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-fab.mat-primary.mat-button-disabled,
.gvHighContrast .mat-fab.mat-accent.mat-button-disabled,
.gvHighContrast .mat-fab.mat-warn.mat-button-disabled,
.gvHighContrast .mat-fab.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-primary.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-accent.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-warn.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvHighContrast .mat-flat-button.mat-primary,
.gvHighContrast .mat-raised-button.mat-primary,
.gvHighContrast .mat-fab.mat-primary,
.gvHighContrast .mat-mini-fab.mat-primary {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-flat-button.mat-accent,
.gvHighContrast .mat-raised-button.mat-accent,
.gvHighContrast .mat-fab.mat-accent,
.gvHighContrast .mat-mini-fab.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-flat-button.mat-warn,
.gvHighContrast .mat-raised-button.mat-warn,
.gvHighContrast .mat-fab.mat-warn,
.gvHighContrast .mat-mini-fab.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-flat-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-primary.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-accent.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-warn.mat-button-disabled,
.gvHighContrast .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-fab.mat-primary.mat-button-disabled,
.gvHighContrast .mat-fab.mat-accent.mat-button-disabled,
.gvHighContrast .mat-fab.mat-warn.mat-button-disabled,
.gvHighContrast .mat-fab.mat-button-disabled.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-primary.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-accent.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-warn.mat-button-disabled,
.gvHighContrast .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvHighContrast .mat-flat-button.mat-primary .mat-ripple-element,
.gvHighContrast .mat-raised-button.mat-primary .mat-ripple-element,
.gvHighContrast .mat-fab.mat-primary .mat-ripple-element,
.gvHighContrast .mat-mini-fab.mat-primary .mat-ripple-element,
.gvHighContrast .mat-flat-button.mat-accent .mat-ripple-element,
.gvHighContrast .mat-raised-button.mat-accent .mat-ripple-element,
.gvHighContrast .mat-fab.mat-accent .mat-ripple-element,
.gvHighContrast .mat-mini-fab.mat-accent .mat-ripple-element,
.gvHighContrast .mat-flat-button.mat-warn .mat-ripple-element,
.gvHighContrast .mat-raised-button.mat-warn .mat-ripple-element,
.gvHighContrast .mat-fab.mat-warn .mat-ripple-element,
.gvHighContrast .mat-mini-fab.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvHighContrast .mat-stroked-button:not([class*="mat-elevation-z"]),
.gvHighContrast .mat-flat-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-raised-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvHighContrast .mat-raised-button:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvHighContrast .mat-raised-button.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-fab:not([class*="mat-elevation-z"]),
.gvHighContrast .mat-mini-fab:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvHighContrast .mat-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]),
.gvHighContrast .mat-mini-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvHighContrast .mat-fab.mat-button-disabled:not([class*="mat-elevation-z"]),
.gvHighContrast .mat-mini-fab.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-button-toggle-standalone,
.gvHighContrast .mat-button-toggle-group {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvHighContrast .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvHighContrast .mat-button-toggle-group-appearance-standard {
  box-shadow: none;
}

.gvHighContrast .mat-button-toggle {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-button-toggle .mat-button-toggle-focus-overlay {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvHighContrast .mat-button-toggle-appearance-standard {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: rgb(79, 74, 66);
}

.gvHighContrast [dir="rtl"] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: initial;
  border-top-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-button-toggle-checked {
  background-color: rgb(79, 74, 66);
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-button-toggle-checked.mat-button-toggle-appearance-standard {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-button-toggle-disabled {
  color: rgba(255, 255, 255, 0.26);
  background-color: rgb(66, 60, 51);
}

.gvHighContrast .mat-button-toggle-disabled.mat-button-toggle-appearance-standard {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: rgb(107, 101, 92);
}

.gvHighContrast .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvHighContrast .mat-button-toggle-group-appearance-standard {
  border-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-card {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-card:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvHighContrast .mat-card.mat-card-flat:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-card-subtitle {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-checkbox-frame {
  border-color: rgb(60, 64, 67);
}

.gvHighContrast .mat-checkbox-mixedmark {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background,
.gvHighContrast .mat-checkbox-checked.mat-primary .mat-checkbox-background {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
.gvHighContrast .mat-checkbox-checked.mat-accent .mat-checkbox-background {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background,
.gvHighContrast .mat-checkbox-checked.mat-warn .mat-checkbox-background {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,
.gvHighContrast .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {
  background-color: rgb(117, 117, 117);
}

.gvHighContrast .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {
  border-color: rgb(117, 117, 117);
}

.gvHighContrast .mat-checkbox-disabled .mat-checkbox-label {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-checkbox .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,
.gvHighContrast .mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,
.gvHighContrast .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,
.gvHighContrast .mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-chip.mat-standard-chip {
  background-color: rgb(79, 74, 66);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvHighContrast .mat-chip.mat-standard-chip::after {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvHighContrast .mat-table {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-table thead,
.gvHighContrast .mat-table tbody,
.gvHighContrast .mat-table tfoot,
.gvHighContrast mat-header-row,
.gvHighContrast mat-row,
.gvHighContrast mat-footer-row,
.gvHighContrast [mat-header-row],
.gvHighContrast [mat-row],
.gvHighContrast [mat-footer-row],
.gvHighContrast .mat-table-sticky {
  background-image: inherit;
  background-color: inherit;
}

.gvHighContrast mat-row,
.gvHighContrast mat-header-row,
.gvHighContrast mat-footer-row,
.gvHighContrast th.mat-header-cell,
.gvHighContrast td.mat-cell,
.gvHighContrast td.mat-footer-cell {
  border-bottom-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-header-cell {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-cell,
.gvHighContrast .mat-footer-cell {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-calendar-arrow {
  border-top-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-datepicker-toggle,
.gvHighContrast .mat-datepicker-content .mat-calendar-next-button,
.gvHighContrast .mat-datepicker-content .mat-calendar-previous-button {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-calendar-table-header {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-calendar-table-header-divider::after {
  background-image: initial;
  background-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-calendar-body-label {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-calendar-body-cell-content,
.gvHighContrast .mat-date-range-input-separator {
  color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0);
}

.gvHighContrast .mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .mat-form-field-disabled .mat-date-range-input-separator {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-bVEB4e {
  color: rgb(218, 220, 224);
}

.gvHighContrast .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.18);
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(0, 121, 107, 0.2);
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvHighContrast [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvHighContrast [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvHighContrast .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvHighContrast .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvHighContrast .mat-calendar-body-selected {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(0, 121, 107, 0.4);
}

.gvHighContrast .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvHighContrast .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(0, 121, 107, 0.3);
}

.gvHighContrast .mat-datepicker-content {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.2);
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvHighContrast .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvHighContrast .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvHighContrast .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvHighContrast .mat-datepicker-content.mat-accent .mat-calendar-body-selected {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(95, 99, 104, 0.4);
}

.gvHighContrast .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvHighContrast .mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(95, 99, 104, 0.3);
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(217, 48, 37, 0.2);
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvHighContrast .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvHighContrast .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvHighContrast .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvHighContrast .mat-datepicker-content.mat-warn .mat-calendar-body-selected {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(217, 48, 37, 0.4);
}

.gvHighContrast .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvHighContrast .mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvHighContrast .mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(217, 48, 37, 0.3);
}

.gvHighContrast .mat-datepicker-content-touch {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-datepicker-toggle-active {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-datepicker-toggle-active.mat-accent {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-datepicker-toggle-active.mat-warn {
  color: rgb(38, 207, 218);
}

.gvHighContrast .VxS2Ke-gElRsf-vhhrIe-YPqjbf-SmKAyb[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-dialog-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-divider {
  border-top-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-divider-vertical {
  border-right-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-expansion-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-expansion-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvHighContrast .mat-action-row {
  border-top-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled="true"]),
.gvHighContrast .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled="true"]),
.gvHighContrast .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled="true"]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvHighContrast .mat-expansion-panel:not(.mat-expanded):not([aria-disabled="true"]) .mat-expansion-panel-header:hover {
    background-image: initial;
    background-color: rgb(38, 38, 38);
  }
}

.gvHighContrast .mat-expansion-panel-header-title {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-expansion-panel-header-description,
.gvHighContrast .mat-expansion-indicator::after {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-expansion-panel-header[aria-disabled="true"] {
  color: rgba(255, 255, 255, 0.26);
}

.gvHighContrast .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-title,
.gvHighContrast .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-description {
  color: inherit;
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-label {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-label.mat-accent {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-label.mat-warn {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-focused .mat-form-field-required-marker {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field-ripple {
  background-color: rgba(79, 74, 66, 0.87);
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-ripple {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after,
.gvHighContrast .mat-form-field.mat-form-field-invalid .mat-form-field-label,
.gvHighContrast .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
.gvHighContrast .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
.gvHighContrast .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-error {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-form-field-appearance-legacy .mat-form-field-label,
.gvHighContrast .mat-form-field-appearance-legacy .mat-hint {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-form-field-appearance-legacy .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvHighContrast .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvHighContrast .mat-form-field-appearance-standard .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvHighContrast .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvHighContrast .mat-form-field-appearance-fill .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.04);
}

.gvHighContrast .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.02);
}

.gvHighContrast .mat-form-field-appearance-fill .mat-form-field-underline::before {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvHighContrast .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {
  background-color: rgba(0, 0, 0, 0);
}

.gvHighContrast .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,
.gvHighContrast .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-icon.mat-primary {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-icon.mat-accent {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-icon.mat-warn {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-form-field-type-mat-native-select .mat-form-field-infix::after {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-input-element:disabled,
.gvHighContrast .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-list-base .mat-list-item,
.gvHighContrast .mat-list-base .mat-list-option {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-list-base .mat-subheader {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-list-item-disabled {
  background-color: rgb(66, 60, 51);
}

.gvHighContrast .mat-list-option:hover,
.gvHighContrast .mat-list-option:focus,
.gvHighContrast .mat-nav-list .mat-list-item:hover,
.gvHighContrast .mat-nav-list .mat-list-item:focus,
.gvHighContrast .mat-action-list .mat-list-item:hover,
.gvHighContrast .mat-action-list .mat-list-item:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvHighContrast .mat-list-single-selected-option,
.gvHighContrast .mat-list-single-selected-option:hover,
.gvHighContrast .mat-list-single-selected-option:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvHighContrast .mat-menu-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-menu-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvHighContrast .mat-menu-item {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-menu-item[disabled],
.gvHighContrast .mat-menu-item[disabled]::after,
.gvHighContrast .mat-menu-item[disabled] .mat-icon-no-color {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-menu-item .mat-icon-no-color,
.gvHighContrast .mat-menu-item-submenu-trigger::after {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-menu-item:hover:not([disabled]),
.gvHighContrast .mat-menu-item.cdk-program-focused:not([disabled]),
.gvHighContrast .mat-menu-item.cdk-keyboard-focused:not([disabled]),
.gvHighContrast .mat-menu-item-highlighted:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvHighContrast .mat-paginator {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-paginator-page-size .mat-select-trigger {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-paginator-decrement,
.gvHighContrast .mat-paginator-increment {
  border-top-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-paginator-first,
.gvHighContrast .mat-paginator-last {
  border-top-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-icon-button[disabled] .mat-paginator-decrement,
.gvHighContrast .mat-icon-button[disabled] .mat-paginator-increment,
.gvHighContrast .mat-icon-button[disabled] .mat-paginator-first,
.gvHighContrast .mat-icon-button[disabled] .mat-paginator-last {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-progress-bar-buffer {
  background-color: rgb(114, 59, 66);
}

.gvHighContrast .mat-progress-bar-fill::after {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-progress-bar.mat-accent .mat-progress-bar-buffer {
  background-color: rgb(79, 77, 75);
}

.gvHighContrast .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-progress-bar.mat-warn .mat-progress-bar-buffer {
  background-color: rgb(20, 115, 120);
}

.gvHighContrast .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-radio-outer-circle {
  border-color: rgb(60, 64, 67);
}

.gvHighContrast .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-radio-button.mat-primary .mat-radio-inner-circle,
.gvHighContrast .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvHighContrast .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
.gvHighContrast .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-radio-button.mat-accent .mat-radio-inner-circle,
.gvHighContrast .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvHighContrast .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
.gvHighContrast .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-radio-button.mat-warn .mat-radio-inner-circle,
.gvHighContrast .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvHighContrast .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
.gvHighContrast .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
.gvHighContrast .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
.gvHighContrast .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-radio-button.mat-radio-disabled .mat-radio-label-content {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-radio-button .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-select-value {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-select-disabled .mat-select-value {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-select-arrow {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-select-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-select-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvHighContrast .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvHighContrast .mat-form-field.mat-focused.mat-primary .mat-select-arrow {
  color: rgb(255, 134, 148);
}

.gvHighContrast .mat-form-field.mat-focused.mat-accent .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field.mat-focused.mat-warn .mat-select-arrow,
.gvHighContrast .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-drawer-container,
.gvHighContrast .mat-drawer {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-drawer.mat-drawer-push {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-drawer:not(.mat-drawer-side) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvHighContrast .mat-drawer-side {
  border-right-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-drawer-side.mat-drawer-end,
.gvHighContrast [dir="rtl"] .mat-drawer-side {
  border-left-color: rgb(79, 74, 66);
  border-right-color: initial;
}

.gvHighContrast [dir="rtl"] .mat-drawer-side.mat-drawer-end {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-drawer-backdrop.mat-drawer-shown {
  background-color: rgba(0, 0, 0, 0.6);
}

.gvHighContrast .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(95, 99, 104, 0.54);
}

.gvHighContrast .mat-slide-toggle.mat-checked .mat-ripple-element {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(0, 121, 107, 0.54);
}

.gvHighContrast .mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(217, 48, 37, 0.54);
}

.gvHighContrast .mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-slide-toggle-thumb {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: rgb(43, 43, 43);
}

.gvHighContrast .mat-slide-toggle-bar {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvHighContrast .mat-primary .mat-slider-track-fill,
.gvHighContrast .mat-primary .mat-slider-thumb,
.gvHighContrast .mat-primary .mat-slider-thumb-label {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-primary .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-primary .mat-slider-focus-ring {
  background-color: rgba(0, 121, 107, 0.2);
}

.gvHighContrast .mat-accent .mat-slider-track-fill,
.gvHighContrast .mat-accent .mat-slider-thumb,
.gvHighContrast .mat-accent .mat-slider-thumb-label {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-accent .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-accent .mat-slider-focus-ring {
  background-color: rgba(95, 99, 104, 0.2);
}

.gvHighContrast .mat-warn .mat-slider-track-fill,
.gvHighContrast .mat-warn .mat-slider-thumb,
.gvHighContrast .mat-warn .mat-slider-thumb-label {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-warn .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-warn .mat-slider-focus-ring {
  background-color: rgba(217, 48, 37, 0.2);
}

.gvHighContrast .mat-slider:hover .mat-slider-track-background,
.gvHighContrast .cdk-focused .mat-slider-track-background {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-slider-disabled .mat-slider-track-background,
.gvHighContrast .mat-slider-disabled .mat-slider-track-fill,
.gvHighContrast .mat-slider-disabled .mat-slider-thumb,
.gvHighContrast .mat-slider-disabled:hover .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvHighContrast .mat-slider-min-value .mat-slider-focus-ring {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvHighContrast .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.gvHighContrast .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {
  background-color: rgb(32, 33, 36);
}

.gvHighContrast .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.gvHighContrast .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {
  background-color: rgb(107, 101, 92);
}

.gvHighContrast .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
  background-color: rgba(0, 0, 0, 0);
}

.gvHighContrast .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb,
.gvHighContrast .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb,
.gvHighContrast .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
}

.gvHighContrast .mat-slider-has-ticks .mat-slider-wrapper::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.gvHighContrast .mat-slider-horizontal .mat-slider-ticks {
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvHighContrast .mat-slider-vertical .mat-slider-ticks {
  background-image: repeating-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvHighContrast .mat-step-header.cdk-keyboard-focused,
.gvHighContrast .mat-step-header.cdk-program-focused,
.gvHighContrast .mat-step-header:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvHighContrast .mat-step-header:hover {
    background-image: none;
    background-color: initial;
  }
}

.gvHighContrast .mat-step-header .mat-step-label,
.gvHighContrast .mat-step-header .mat-step-optional {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-step-header .mat-step-icon {
  background-color: rgb(60, 64, 67);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header .mat-step-icon-selected,
.gvHighContrast .mat-step-header .mat-step-icon-state-done,
.gvHighContrast .mat-step-header .mat-step-icon-state-edit {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header.mat-accent .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header.mat-accent .mat-step-icon-selected,
.gvHighContrast .mat-step-header.mat-accent .mat-step-icon-state-done,
.gvHighContrast .mat-step-header.mat-accent .mat-step-icon-state-edit {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header.mat-warn .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header.mat-warn .mat-step-icon-selected,
.gvHighContrast .mat-step-header.mat-warn .mat-step-icon-state-done,
.gvHighContrast .mat-step-header.mat-warn .mat-step-icon-state-edit {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header .mat-step-icon-state-error {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-step-header .mat-step-label.mat-step-label-active {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-step-header .mat-step-label.mat-step-label-error {
  color: rgb(38, 207, 218);
}

.gvHighContrast .mat-stepper-horizontal,
.gvHighContrast .mat-stepper-vertical {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-stepper-vertical-line::before {
  border-left-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-horizontal-stepper-header::before,
.gvHighContrast .mat-horizontal-stepper-header::after,
.gvHighContrast .mat-stepper-horizontal-line {
  border-top-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-sort-header-arrow {
  color: rgb(195, 191, 188);
}

.gvHighContrast .mat-tab-nav-bar,
.gvHighContrast .mat-tab-header {
  border-bottom-color: rgb(79, 74, 66);
}

.gvHighContrast .mat-tab-group-inverted-header .mat-tab-nav-bar,
.gvHighContrast .mat-tab-group-inverted-header .mat-tab-header {
  border-top-color: rgb(79, 74, 66);
  border-bottom-color: initial;
}

.gvHighContrast .mat-tab-label,
.gvHighContrast .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvHighContrast .mat-tab-header-pagination-chevron {
  border-color: rgb(0, 0, 0);
}

.gvHighContrast .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvHighContrast .mat-tab-group[class*="mat-background-"] .mat-tab-header,
.gvHighContrast .mat-tab-nav-bar[class*="mat-background-"] {
  border-bottom-color: initial;
  border-top-color: initial;
}

.gvHighContrast .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.gvHighContrast .mat-tab-group.mat-primary .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvHighContrast .mat-tab-group.mat-accent .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvHighContrast .mat-tab-group.mat-warn .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvHighContrast .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-link-container,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header-pagination,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvHighContrast .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-link-container,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header-pagination,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvHighContrast .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-link-container,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header-pagination,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvHighContrast .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvHighContrast .mat-toolbar {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-toolbar.mat-primary {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-toolbar.mat-accent {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-toolbar.mat-warn {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-toolbar .mat-form-field-underline,
.gvHighContrast .mat-toolbar .mat-form-field-ripple,
.gvHighContrast .mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentcolor;
}

.gvHighContrast .mat-toolbar .mat-form-field-label,
.gvHighContrast .mat-toolbar .mat-focused .mat-form-field-label,
.gvHighContrast .mat-toolbar .mat-select-value,
.gvHighContrast .mat-toolbar .mat-select-arrow,
.gvHighContrast .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}

.gvHighContrast .mat-tooltip {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.9);
}

.gvHighContrast .mat-tree {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvHighContrast .mat-tree-node,
.gvHighContrast .mat-nested-tree-node {
  color: rgb(255, 255, 255);
}

.gvHighContrast .mat-snack-bar-container {
  color: rgba(255, 255, 255, 0.7);
  background-image: initial;
  background-color: rgb(50, 50, 50);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvHighContrast .mat-simple-snackbar-action {
  color: rgb(160, 156, 151);
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]),
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]),
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]),
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]),
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]),
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-flat-button:not([disabled]):active,
.gvHighContrast.gmat-button.mat-flat-button:not([disabled]):active,
.gvHighContrast .gmat-button .mat-flat-button:not([disabled]):active,
.gvHighContrast .gmat-button.mat-flat-button:not([disabled]):active,
.gmat-button .gvHighContrast .mat-flat-button:not([disabled]):active,
.gmat-button .gvHighContrast.mat-flat-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvHighContrast.gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gvHighContrast .gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvHighContrast .gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvHighContrast .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvHighContrast.mat-flat-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvHighContrast.gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gvHighContrast .gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvHighContrast .gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvHighContrast .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvHighContrast.mat-flat-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-stroked-button,
.gvHighContrast.gmat-button.mat-stroked-button,
.gvHighContrast .gmat-button .mat-stroked-button,
.gvHighContrast .gmat-button.mat-stroked-button,
.gmat-button .gvHighContrast .mat-stroked-button,
.gmat-button .gvHighContrast.mat-stroked-button {
  border-color: rgb(57, 49, 45);
}

.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]),
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]),
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]),
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]),
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]),
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(255, 134, 148);
}

.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):hover,
.gvHighContrast.gmat-button .mat-stroked-button:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-stroked-button:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-stroked-button:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-stroked-button:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-stroked-button:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-stroked-button:not([disabled]):focus {
  border-color: rgb(131, 54, 61);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn {
  border-color: rgb(57, 49, 45);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(38, 207, 218);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvHighContrast.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-stroked-button.mat-warn:not([disabled]):focus {
  border-color: rgb(12, 110, 117);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent {
  border-color: rgb(57, 49, 45);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvHighContrast.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-stroked-button.mat-accent:not([disabled]):focus {
  border-color: rgb(57, 49, 45);
}

.gvHighContrast.gmat-button .mat-raised-button,
.gvHighContrast.gmat-button.mat-raised-button,
.gvHighContrast .gmat-button .mat-raised-button,
.gvHighContrast .gmat-button.mat-raised-button,
.gmat-button .gvHighContrast .mat-raised-button,
.gmat-button .gvHighContrast.mat-raised-button {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]),
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]),
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]),
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]),
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]),
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-raised-button:not([disabled]):active,
.gvHighContrast.gmat-button.mat-raised-button:not([disabled]):active,
.gvHighContrast .gmat-button .mat-raised-button:not([disabled]):active,
.gvHighContrast .gmat-button.mat-raised-button:not([disabled]):active,
.gmat-button .gvHighContrast .mat-raised-button:not([disabled]):active,
.gmat-button .gvHighContrast.mat-raised-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvHighContrast.gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gvHighContrast .gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvHighContrast .gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvHighContrast .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvHighContrast.mat-raised-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvHighContrast.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvHighContrast.gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gvHighContrast .gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvHighContrast .gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvHighContrast .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvHighContrast.mat-raised-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvHighContrast.gmat-button .mat-button:not([disabled]),
.gvHighContrast.gmat-button.mat-button:not([disabled]),
.gvHighContrast .gmat-button .mat-button:not([disabled]),
.gvHighContrast .gmat-button.mat-button:not([disabled]),
.gmat-button .gvHighContrast .mat-button:not([disabled]),
.gmat-button .gvHighContrast.mat-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 134, 148);
}

.gvHighContrast.gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvHighContrast.gmat-button .mat-button.mat-warn:not([disabled]),
.gvHighContrast.gmat-button.mat-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button .mat-button.mat-warn:not([disabled]),
.gvHighContrast .gmat-button.mat-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast .mat-button.mat-warn:not([disabled]),
.gmat-button .gvHighContrast.mat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvHighContrast.gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast.gmat-button .mat-button.mat-accent:not([disabled]),
.gvHighContrast.gmat-button.mat-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button .mat-button.mat-accent:not([disabled]),
.gvHighContrast .gmat-button.mat-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast .mat-button.mat-accent:not([disabled]),
.gmat-button .gvHighContrast.mat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 156, 151);
}

.gvHighContrast.gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast.gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvHighContrast .gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvHighContrast.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvHighContrast.gmat-button .mat-flat-button[disabled],
.gvHighContrast.gmat-button .mat-stroked-button[disabled],
.gvHighContrast.gmat-button .mat-raised-button[disabled],
.gvHighContrast.gmat-button .mat-button[disabled],
.gvHighContrast.gmat-button.mat-flat-button[disabled],
.gvHighContrast.gmat-button.mat-stroked-button[disabled],
.gvHighContrast.gmat-button.mat-raised-button[disabled],
.gvHighContrast.gmat-button.mat-button[disabled],
.gvHighContrast .gmat-button .mat-flat-button[disabled],
.gvHighContrast .gmat-button .mat-stroked-button[disabled],
.gvHighContrast .gmat-button .mat-raised-button[disabled],
.gvHighContrast .gmat-button .mat-button[disabled],
.gvHighContrast .gmat-button.mat-flat-button[disabled],
.gvHighContrast .gmat-button.mat-stroked-button[disabled],
.gvHighContrast .gmat-button.mat-raised-button[disabled],
.gvHighContrast .gmat-button.mat-button[disabled],
.gmat-button .gvHighContrast .mat-flat-button[disabled],
.gmat-button .gvHighContrast .mat-stroked-button[disabled],
.gmat-button .gvHighContrast .mat-raised-button[disabled],
.gmat-button .gvHighContrast .mat-button[disabled],
.gmat-button .gvHighContrast.mat-flat-button[disabled],
.gmat-button .gvHighContrast.mat-stroked-button[disabled],
.gmat-button .gvHighContrast.mat-raised-button[disabled],
.gmat-button .gvHighContrast.mat-button[disabled] {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvHighContrast .mat-form-field-label,
.gvHighContrast .mat-hint {
  color: rgb(160, 156, 151);
}

.gvHighContrast .mat-form-field-appearance-outline .mat-form-field-outline,
.gvHighContrast .mat-form-field-appearance-outline .mat-form-field-outline-thick {
  color: rgb(218, 220, 224);
}

.gvHighContrast .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {
  color: rgba(218, 220, 224, 0.38);
}

.gvHighContrast .gmat-tabs.mat-primary .mat-tab-label,
.gvHighContrast .gmat-tabs.mat-primary .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvHighContrast .gmat-tabs.mat-primary .mat-tab-label.mat-tab-label-active,
.gvHighContrast .gmat-tabs.mat-primary .mat-tab-link.mat-tab-label-active {
  color: rgb(255, 134, 148);
}

.gvHighContrast .gmat-tabs.mat-primary .mat-tab-label.mat-tab-disabled,
.gvHighContrast .gmat-tabs.mat-primary .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvHighContrast .gmat-tabs.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast .gmat-tabs.mat-accent .mat-tab-label,
.gvHighContrast .gmat-tabs.mat-accent .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvHighContrast .gmat-tabs.mat-accent .mat-tab-label.mat-tab-label-active,
.gvHighContrast .gmat-tabs.mat-accent .mat-tab-link.mat-tab-label-active {
  color: rgb(160, 156, 151);
}

.gvHighContrast .gmat-tabs.mat-accent .mat-tab-label.mat-tab-disabled,
.gvHighContrast .gmat-tabs.mat-accent .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvHighContrast .gmat-tabs.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvHighContrast .gmat-tabs.mat-warn .mat-tab-label,
.gvHighContrast .gmat-tabs.mat-warn .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvHighContrast .gmat-tabs.mat-warn .mat-tab-label.mat-tab-label-active,
.gvHighContrast .gmat-tabs.mat-warn .mat-tab-link.mat-tab-label-active {
  color: rgb(38, 207, 218);
}

.gvHighContrast .gmat-tabs.mat-warn .mat-tab-label.mat-tab-disabled,
.gvHighContrast .gmat-tabs.mat-warn .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvHighContrast .gmat-tabs.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvHighContrast .gmat-tabs .mat-tab-label.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvHighContrast .gmat-tabs .mat-tab-link.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled) {
  background-color: rgba(60, 64, 67, 0.12);
}

.gvHighContrast .gmat-tabs .mat-tab-label .mat-ripple-element,
.gvHighContrast .gmat-tabs .mat-tab-link .mat-ripple-element {
  background-color: rgba(0, 121, 107, 0.12);
}

.gvHighContrast .xap-inline-dialog-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-ripple-element {
  background-color: rgba(0, 0, 0, 0.1);
}

.gvCompanionRoot .mat-option {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-option:hover:not(.mat-option-disabled),
.gvCompanionRoot .mat-option:focus:not(.mat-option-disabled),
.gvCompanionRoot .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvCompanionRoot .mat-option.mat-active {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-option.mat-option-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-optgroup-label {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-optgroup-disabled .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-pseudo-checkbox {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-pseudo-checkbox::after {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-pseudo-checkbox-disabled {
  color: rgb(176, 176, 176);
}

.gvCompanionRoot .mat-primary .mat-pseudo-checkbox-checked,
.gvCompanionRoot .mat-primary .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-pseudo-checkbox-checked,
.gvCompanionRoot .mat-pseudo-checkbox-indeterminate,
.gvCompanionRoot .mat-accent .mat-pseudo-checkbox-checked,
.gvCompanionRoot .mat-accent .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-warn .mat-pseudo-checkbox-checked,
.gvCompanionRoot .mat-warn .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.gvCompanionRoot .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-image: initial;
  background-color: rgb(117, 117, 117);
}

.gvCompanionRoot .mat-app-background,
.gvCompanionRoot.mat-app-background {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-elevation-z0 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-elevation-z1 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvCompanionRoot .mat-elevation-z2 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvCompanionRoot .mat-elevation-z3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvCompanionRoot .mat-elevation-z4 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvCompanionRoot .mat-elevation-z5 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
}

.gvCompanionRoot .mat-elevation-z6 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvCompanionRoot .mat-elevation-z7 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
}

.gvCompanionRoot .mat-elevation-z8 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvCompanionRoot .mat-elevation-z9 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
}

.gvCompanionRoot .mat-elevation-z10 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
}

.gvCompanionRoot .mat-elevation-z11 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
}

.gvCompanionRoot .mat-elevation-z12 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvCompanionRoot .mat-elevation-z13 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

.gvCompanionRoot .mat-elevation-z14 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
}

.gvCompanionRoot .mat-elevation-z15 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}

.gvCompanionRoot .mat-elevation-z16 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvCompanionRoot .mat-elevation-z17 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
}

.gvCompanionRoot .mat-elevation-z18 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
}

.gvCompanionRoot .mat-elevation-z19 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
}

.gvCompanionRoot .mat-elevation-z20 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
}

.gvCompanionRoot .mat-elevation-z21 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
}

.gvCompanionRoot .mat-elevation-z22 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
}

.gvCompanionRoot .mat-elevation-z23 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
}

.gvCompanionRoot .mat-elevation-z24 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
}

.gvCompanionRoot .mat-autocomplete-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-autocomplete-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvCompanionRoot .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-badge-accent .mat-badge-content {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-badge-warn .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-badge-disabled .mat-badge-content {
  background-image: initial;
  background-color: rgb(104, 104, 104);
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-bottom-sheet-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-button,
.gvCompanionRoot .mat-icon-button,
.gvCompanionRoot .mat-stroked-button {
  color: inherit;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.gvCompanionRoot .mat-button.mat-primary,
.gvCompanionRoot .mat-icon-button.mat-primary,
.gvCompanionRoot .mat-stroked-button.mat-primary {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-button.mat-accent,
.gvCompanionRoot .mat-icon-button.mat-accent,
.gvCompanionRoot .mat-stroked-button.mat-accent {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-button.mat-warn,
.gvCompanionRoot .mat-icon-button.mat-warn,
.gvCompanionRoot .mat-stroked-button.mat-warn {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-icon-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-icon-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-icon-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-icon-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-stroked-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-stroked-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-stroked-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-stroked-button.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvCompanionRoot .mat-button.mat-primary .mat-button-focus-overlay,
.gvCompanionRoot .mat-icon-button.mat-primary .mat-button-focus-overlay,
.gvCompanionRoot .mat-stroked-button.mat-primary .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-button.mat-accent .mat-button-focus-overlay,
.gvCompanionRoot .mat-icon-button.mat-accent .mat-button-focus-overlay,
.gvCompanionRoot .mat-stroked-button.mat-accent .mat-button-focus-overlay {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-button.mat-warn .mat-button-focus-overlay,
.gvCompanionRoot .mat-icon-button.mat-warn .mat-button-focus-overlay,
.gvCompanionRoot .mat-stroked-button.mat-warn .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-button.mat-button-disabled .mat-button-focus-overlay,
.gvCompanionRoot .mat-icon-button.mat-button-disabled .mat-button-focus-overlay,
.gvCompanionRoot .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.gvCompanionRoot .mat-button .mat-ripple-element,
.gvCompanionRoot .mat-icon-button .mat-ripple-element,
.gvCompanionRoot .mat-stroked-button .mat-ripple-element {
  background-color: currentcolor;
}

.gvCompanionRoot .mat-button-focus-overlay {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-stroked-button:not(.mat-button-disabled) {
  border-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-flat-button,
.gvCompanionRoot .mat-raised-button,
.gvCompanionRoot .mat-fab,
.gvCompanionRoot .mat-mini-fab {
  color: rgb(223, 222, 219);
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-flat-button.mat-primary,
.gvCompanionRoot .mat-raised-button.mat-primary,
.gvCompanionRoot .mat-fab.mat-primary,
.gvCompanionRoot .mat-mini-fab.mat-primary,
.gvCompanionRoot .mat-flat-button.mat-accent,
.gvCompanionRoot .mat-raised-button.mat-accent,
.gvCompanionRoot .mat-fab.mat-accent,
.gvCompanionRoot .mat-mini-fab.mat-accent,
.gvCompanionRoot .mat-flat-button.mat-warn,
.gvCompanionRoot .mat-raised-button.mat-warn,
.gvCompanionRoot .mat-fab.mat-warn,
.gvCompanionRoot .mat-mini-fab.mat-warn {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-flat-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvCompanionRoot .mat-flat-button.mat-primary,
.gvCompanionRoot .mat-raised-button.mat-primary,
.gvCompanionRoot .mat-fab.mat-primary,
.gvCompanionRoot .mat-mini-fab.mat-primary {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-flat-button.mat-accent,
.gvCompanionRoot .mat-raised-button.mat-accent,
.gvCompanionRoot .mat-fab.mat-accent,
.gvCompanionRoot .mat-mini-fab.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-flat-button.mat-warn,
.gvCompanionRoot .mat-raised-button.mat-warn,
.gvCompanionRoot .mat-fab.mat-warn,
.gvCompanionRoot .mat-mini-fab.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-flat-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-fab.mat-button-disabled.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-primary.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-accent.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-warn.mat-button-disabled,
.gvCompanionRoot .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvCompanionRoot .mat-flat-button.mat-primary .mat-ripple-element,
.gvCompanionRoot .mat-raised-button.mat-primary .mat-ripple-element,
.gvCompanionRoot .mat-fab.mat-primary .mat-ripple-element,
.gvCompanionRoot .mat-mini-fab.mat-primary .mat-ripple-element,
.gvCompanionRoot .mat-flat-button.mat-accent .mat-ripple-element,
.gvCompanionRoot .mat-raised-button.mat-accent .mat-ripple-element,
.gvCompanionRoot .mat-fab.mat-accent .mat-ripple-element,
.gvCompanionRoot .mat-mini-fab.mat-accent .mat-ripple-element,
.gvCompanionRoot .mat-flat-button.mat-warn .mat-ripple-element,
.gvCompanionRoot .mat-raised-button.mat-warn .mat-ripple-element,
.gvCompanionRoot .mat-fab.mat-warn .mat-ripple-element,
.gvCompanionRoot .mat-mini-fab.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvCompanionRoot .mat-stroked-button:not([class*="mat-elevation-z"]),
.gvCompanionRoot .mat-flat-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-raised-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvCompanionRoot .mat-raised-button:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvCompanionRoot .mat-raised-button.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-fab:not([class*="mat-elevation-z"]),
.gvCompanionRoot .mat-mini-fab:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvCompanionRoot .mat-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]),
.gvCompanionRoot .mat-mini-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvCompanionRoot .mat-fab.mat-button-disabled:not([class*="mat-elevation-z"]),
.gvCompanionRoot .mat-mini-fab.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-button-toggle-standalone,
.gvCompanionRoot .mat-button-toggle-group {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvCompanionRoot .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvCompanionRoot .mat-button-toggle-group-appearance-standard {
  box-shadow: none;
}

.gvCompanionRoot .mat-button-toggle {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-button-toggle .mat-button-toggle-focus-overlay {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvCompanionRoot .mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: rgb(79, 74, 66);
}

.gvCompanionRoot [dir="rtl"] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: initial;
  border-top-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-button-toggle-checked {
  background-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-button-toggle-checked.mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-button-toggle-disabled {
  color: rgba(255, 255, 255, 0.26);
  background-color: rgb(66, 60, 51);
}

.gvCompanionRoot .mat-button-toggle-disabled.mat-button-toggle-appearance-standard {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: rgb(107, 101, 92);
}

.gvCompanionRoot .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvCompanionRoot .mat-button-toggle-group-appearance-standard {
  border-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-card {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-card:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvCompanionRoot .mat-card.mat-card-flat:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-card-subtitle {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-checkbox-frame {
  border-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-checkbox-mixedmark {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background,
.gvCompanionRoot .mat-checkbox-checked.mat-primary .mat-checkbox-background {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
.gvCompanionRoot .mat-checkbox-checked.mat-accent .mat-checkbox-background {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background,
.gvCompanionRoot .mat-checkbox-checked.mat-warn .mat-checkbox-background {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,
.gvCompanionRoot .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {
  background-color: rgb(117, 117, 117);
}

.gvCompanionRoot .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {
  border-color: rgb(117, 117, 117);
}

.gvCompanionRoot .mat-checkbox-disabled .mat-checkbox-label {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-checkbox .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,
.gvCompanionRoot .mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {
  background-image: initial;
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,
.gvCompanionRoot .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,
.gvCompanionRoot .mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-chip.mat-standard-chip {
  background-color: rgb(79, 74, 66);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-chip.mat-standard-chip .mat-chip-remove {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvCompanionRoot .mat-chip.mat-standard-chip::after {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvCompanionRoot .mat-table {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-table thead,
.gvCompanionRoot .mat-table tbody,
.gvCompanionRoot .mat-table tfoot,
.gvCompanionRoot mat-header-row,
.gvCompanionRoot mat-row,
.gvCompanionRoot mat-footer-row,
.gvCompanionRoot [mat-header-row],
.gvCompanionRoot [mat-row],
.gvCompanionRoot [mat-footer-row],
.gvCompanionRoot .mat-table-sticky {
  background-image: inherit;
  background-color: inherit;
}

.gvCompanionRoot mat-row,
.gvCompanionRoot mat-header-row,
.gvCompanionRoot mat-footer-row,
.gvCompanionRoot th.mat-header-cell,
.gvCompanionRoot td.mat-cell,
.gvCompanionRoot td.mat-footer-cell {
  border-bottom-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-header-cell {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-cell,
.gvCompanionRoot .mat-footer-cell {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-calendar-arrow {
  border-top-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-datepicker-toggle,
.gvCompanionRoot .mat-datepicker-content .mat-calendar-next-button,
.gvCompanionRoot .mat-datepicker-content .mat-calendar-previous-button {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-calendar-table-header {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-calendar-table-header-divider::after {
  background-image: initial;
  background-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-calendar-body-label {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-calendar-body-cell-content,
.gvCompanionRoot .mat-date-range-input-separator {
  color: rgb(223, 222, 219);
  border-color: rgba(0, 0, 0, 0);
}

.gvCompanionRoot .mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .mat-form-field-disabled .mat-date-range-input-separator {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-bVEB4e {
  color: rgb(218, 220, 224);
}

.gvCompanionRoot .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.18);
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(0, 121, 107, 0.2);
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvCompanionRoot [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvCompanionRoot [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(0, 121, 107, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvCompanionRoot .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvCompanionRoot .mat-calendar-body-selected {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(0, 121, 107, 0.4);
}

.gvCompanionRoot .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvCompanionRoot .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(0, 121, 107, 0.3);
}

.gvCompanionRoot .mat-datepicker-content {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.2);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvCompanionRoot .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvCompanionRoot .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvCompanionRoot .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .mat-calendar-body-selected {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(95, 99, 104, 0.4);
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvCompanionRoot .mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(95, 99, 104, 0.3);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(217, 48, 37, 0.2);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvCompanionRoot .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvCompanionRoot .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvCompanionRoot .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .mat-calendar-body-selected {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(217, 48, 37, 0.4);
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvCompanionRoot .mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvCompanionRoot .mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(217, 48, 37, 0.3);
}

.gvCompanionRoot .mat-datepicker-content-touch {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-datepicker-toggle-active {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-datepicker-toggle-active.mat-accent {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-datepicker-toggle-active.mat-warn {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .VxS2Ke-gElRsf-vhhrIe-YPqjbf-SmKAyb[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-dialog-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-divider {
  border-top-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-divider-vertical {
  border-right-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-expansion-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-expansion-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvCompanionRoot .mat-action-row {
  border-top-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled="true"]),
.gvCompanionRoot .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled="true"]),
.gvCompanionRoot .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled="true"]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvCompanionRoot .mat-expansion-panel:not(.mat-expanded):not([aria-disabled="true"]) .mat-expansion-panel-header:hover {
    background-image: initial;
    background-color: rgb(38, 38, 38);
  }
}

.gvCompanionRoot .mat-expansion-panel-header-title {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-expansion-panel-header-description,
.gvCompanionRoot .mat-expansion-indicator::after {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-expansion-panel-header[aria-disabled="true"] {
  color: rgba(255, 255, 255, 0.26);
}

.gvCompanionRoot .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-title,
.gvCompanionRoot .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-description {
  color: inherit;
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-label {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-label.mat-accent {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-label.mat-warn {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-focused .mat-form-field-required-marker {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field-ripple {
  background-color: rgba(79, 74, 66, 0.87);
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-ripple {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after,
.gvCompanionRoot .mat-form-field.mat-form-field-invalid .mat-form-field-label,
.gvCompanionRoot .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
.gvCompanionRoot .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
.gvCompanionRoot .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-error {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-form-field-appearance-legacy .mat-form-field-label,
.gvCompanionRoot .mat-form-field-appearance-legacy .mat-hint {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field-appearance-legacy .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvCompanionRoot .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvCompanionRoot .mat-form-field-appearance-standard .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvCompanionRoot .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvCompanionRoot .mat-form-field-appearance-fill .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.04);
}

.gvCompanionRoot .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.02);
}

.gvCompanionRoot .mat-form-field-appearance-fill .mat-form-field-underline::before {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvCompanionRoot .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {
  background-color: rgba(0, 0, 0, 0);
}

.gvCompanionRoot .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,
.gvCompanionRoot .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-icon.mat-primary {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-icon.mat-accent {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-icon.mat-warn {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-form-field-type-mat-native-select .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-input-element:disabled,
.gvCompanionRoot .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-list-base .mat-list-item,
.gvCompanionRoot .mat-list-base .mat-list-option {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-list-base .mat-subheader {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-list-item-disabled {
  background-color: rgb(66, 60, 51);
}

.gvCompanionRoot .mat-list-option:hover,
.gvCompanionRoot .mat-list-option:focus,
.gvCompanionRoot .mat-nav-list .mat-list-item:hover,
.gvCompanionRoot .mat-nav-list .mat-list-item:focus,
.gvCompanionRoot .mat-action-list .mat-list-item:hover,
.gvCompanionRoot .mat-action-list .mat-list-item:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvCompanionRoot .mat-list-single-selected-option,
.gvCompanionRoot .mat-list-single-selected-option:hover,
.gvCompanionRoot .mat-list-single-selected-option:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvCompanionRoot .mat-menu-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-menu-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvCompanionRoot .mat-menu-item {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-menu-item[disabled],
.gvCompanionRoot .mat-menu-item[disabled]::after,
.gvCompanionRoot .mat-menu-item[disabled] .mat-icon-no-color {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-menu-item .mat-icon-no-color,
.gvCompanionRoot .mat-menu-item-submenu-trigger::after {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-menu-item:hover:not([disabled]),
.gvCompanionRoot .mat-menu-item.cdk-program-focused:not([disabled]),
.gvCompanionRoot .mat-menu-item.cdk-keyboard-focused:not([disabled]),
.gvCompanionRoot .mat-menu-item-highlighted:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvCompanionRoot .mat-paginator {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-paginator-page-size .mat-select-trigger {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-paginator-decrement,
.gvCompanionRoot .mat-paginator-increment {
  border-top-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-paginator-first,
.gvCompanionRoot .mat-paginator-last {
  border-top-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-icon-button[disabled] .mat-paginator-decrement,
.gvCompanionRoot .mat-icon-button[disabled] .mat-paginator-increment,
.gvCompanionRoot .mat-icon-button[disabled] .mat-paginator-first,
.gvCompanionRoot .mat-icon-button[disabled] .mat-paginator-last {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-progress-bar-buffer {
  background-color: rgb(114, 59, 66);
}

.gvCompanionRoot .mat-progress-bar-fill::after {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-progress-bar.mat-accent .mat-progress-bar-buffer {
  background-color: rgb(79, 77, 75);
}

.gvCompanionRoot .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-progress-bar.mat-warn .mat-progress-bar-buffer {
  background-color: rgb(20, 115, 120);
}

.gvCompanionRoot .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-radio-button.mat-primary .mat-radio-inner-circle,
.gvCompanionRoot .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvCompanionRoot .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
.gvCompanionRoot .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-radio-button.mat-accent .mat-radio-inner-circle,
.gvCompanionRoot .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvCompanionRoot .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
.gvCompanionRoot .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-radio-button.mat-warn .mat-radio-inner-circle,
.gvCompanionRoot .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvCompanionRoot .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
.gvCompanionRoot .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
.gvCompanionRoot .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
.gvCompanionRoot .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-radio-button.mat-radio-disabled .mat-radio-label-content {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-radio-button .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-select-value {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-select-disabled .mat-select-value {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-select-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-select-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvCompanionRoot .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvCompanionRoot .mat-form-field.mat-focused.mat-primary .mat-select-arrow {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .mat-form-field.mat-focused.mat-accent .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-form-field.mat-focused.mat-warn .mat-select-arrow,
.gvCompanionRoot .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-drawer-container,
.gvCompanionRoot .mat-drawer {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-drawer.mat-drawer-push {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-drawer:not(.mat-drawer-side) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvCompanionRoot .mat-drawer-side {
  border-right-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-drawer-side.mat-drawer-end,
.gvCompanionRoot [dir="rtl"] .mat-drawer-side {
  border-left-color: rgb(79, 74, 66);
  border-right-color: initial;
}

.gvCompanionRoot [dir="rtl"] .mat-drawer-side.mat-drawer-end {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-drawer-backdrop.mat-drawer-shown {
  background-color: rgba(0, 0, 0, 0.6);
}

.gvCompanionRoot .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(95, 99, 104, 0.54);
}

.gvCompanionRoot .mat-slide-toggle.mat-checked .mat-ripple-element {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(0, 121, 107, 0.54);
}

.gvCompanionRoot .mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(217, 48, 37, 0.54);
}

.gvCompanionRoot .mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvCompanionRoot .mat-slide-toggle-thumb {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: rgb(43, 43, 43);
}

.gvCompanionRoot .mat-slide-toggle-bar {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvCompanionRoot .mat-primary .mat-slider-track-fill,
.gvCompanionRoot .mat-primary .mat-slider-thumb,
.gvCompanionRoot .mat-primary .mat-slider-thumb-label {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-primary .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-primary .mat-slider-focus-ring {
  background-color: rgba(0, 121, 107, 0.2);
}

.gvCompanionRoot .mat-accent .mat-slider-track-fill,
.gvCompanionRoot .mat-accent .mat-slider-thumb,
.gvCompanionRoot .mat-accent .mat-slider-thumb-label {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-accent .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-accent .mat-slider-focus-ring {
  background-color: rgba(95, 99, 104, 0.2);
}

.gvCompanionRoot .mat-warn .mat-slider-track-fill,
.gvCompanionRoot .mat-warn .mat-slider-thumb,
.gvCompanionRoot .mat-warn .mat-slider-thumb-label {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-warn .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-warn .mat-slider-focus-ring {
  background-color: rgba(217, 48, 37, 0.2);
}

.gvCompanionRoot .mat-slider:hover .mat-slider-track-background,
.gvCompanionRoot .cdk-focused .mat-slider-track-background {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-slider-disabled .mat-slider-track-background,
.gvCompanionRoot .mat-slider-disabled .mat-slider-track-fill,
.gvCompanionRoot .mat-slider-disabled .mat-slider-thumb,
.gvCompanionRoot .mat-slider-disabled:hover .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvCompanionRoot .mat-slider-min-value .mat-slider-focus-ring {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvCompanionRoot .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.gvCompanionRoot .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {
  background-color: rgb(32, 33, 36);
}

.gvCompanionRoot .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.gvCompanionRoot .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {
  background-color: rgb(107, 101, 92);
}

.gvCompanionRoot .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
  background-color: rgba(0, 0, 0, 0);
}

.gvCompanionRoot .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb,
.gvCompanionRoot .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb,
.gvCompanionRoot .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
}

.gvCompanionRoot .mat-slider-has-ticks .mat-slider-wrapper::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.gvCompanionRoot .mat-slider-horizontal .mat-slider-ticks {
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvCompanionRoot .mat-slider-vertical .mat-slider-ticks {
  background-image: repeating-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvCompanionRoot .mat-step-header.cdk-keyboard-focused,
.gvCompanionRoot .mat-step-header.cdk-program-focused,
.gvCompanionRoot .mat-step-header:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvCompanionRoot .mat-step-header:hover {
    background-image: none;
    background-color: initial;
  }
}

.gvCompanionRoot .mat-step-header .mat-step-label,
.gvCompanionRoot .mat-step-header .mat-step-optional {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-step-header .mat-step-icon {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header .mat-step-icon-selected,
.gvCompanionRoot .mat-step-header .mat-step-icon-state-done,
.gvCompanionRoot .mat-step-header .mat-step-icon-state-edit {
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header.mat-accent .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header.mat-accent .mat-step-icon-selected,
.gvCompanionRoot .mat-step-header.mat-accent .mat-step-icon-state-done,
.gvCompanionRoot .mat-step-header.mat-accent .mat-step-icon-state-edit {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header.mat-warn .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header.mat-warn .mat-step-icon-selected,
.gvCompanionRoot .mat-step-header.mat-warn .mat-step-icon-state-done,
.gvCompanionRoot .mat-step-header.mat-warn .mat-step-icon-state-edit {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-step-header .mat-step-icon-state-error {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-step-header .mat-step-label.mat-step-label-active {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-step-header .mat-step-label.mat-step-label-error {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .mat-stepper-horizontal,
.gvCompanionRoot .mat-stepper-vertical {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-stepper-vertical-line::before {
  border-left-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-horizontal-stepper-header::before,
.gvCompanionRoot .mat-horizontal-stepper-header::after,
.gvCompanionRoot .mat-stepper-horizontal-line {
  border-top-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-sort-header-arrow {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .mat-tab-nav-bar,
.gvCompanionRoot .mat-tab-header {
  border-bottom-color: rgb(79, 74, 66);
}

.gvCompanionRoot .mat-tab-group-inverted-header .mat-tab-nav-bar,
.gvCompanionRoot .mat-tab-group-inverted-header .mat-tab-header {
  border-top-color: rgb(79, 74, 66);
  border-bottom-color: initial;
}

.gvCompanionRoot .mat-tab-label,
.gvCompanionRoot .mat-tab-link {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvCompanionRoot .mat-tab-header-pagination-chevron {
  border-color: rgb(32, 33, 36);
}

.gvCompanionRoot .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvCompanionRoot .mat-tab-group[class*="mat-background-"] .mat-tab-header,
.gvCompanionRoot .mat-tab-nav-bar[class*="mat-background-"] {
  border-bottom-color: initial;
  border-top-color: initial;
}

.gvCompanionRoot .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-primary .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-accent .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-warn .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvCompanionRoot .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(202, 126, 133, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header-pagination,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header-pagination,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header-pagination,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvCompanionRoot .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvCompanionRoot .mat-toolbar {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-toolbar.mat-primary {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-toolbar.mat-accent {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-toolbar.mat-warn {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot .mat-toolbar .mat-form-field-underline,
.gvCompanionRoot .mat-toolbar .mat-form-field-ripple,
.gvCompanionRoot .mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentcolor;
}

.gvCompanionRoot .mat-toolbar .mat-form-field-label,
.gvCompanionRoot .mat-toolbar .mat-focused .mat-form-field-label,
.gvCompanionRoot .mat-toolbar .mat-select-value,
.gvCompanionRoot .mat-toolbar .mat-select-arrow,
.gvCompanionRoot .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}

.gvCompanionRoot .mat-tooltip {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.9);
}

.gvCompanionRoot .mat-tree {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot .mat-tree-node,
.gvCompanionRoot .mat-nested-tree-node {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot .mat-snack-bar-container {
  color: rgba(255, 255, 255, 0.7);
  background-image: initial;
  background-color: rgb(50, 50, 50);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvCompanionRoot .mat-simple-snackbar-action {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]),
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]),
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]),
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]),
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]),
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-flat-button:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-flat-button:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-flat-button:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-flat-button:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-flat-button:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-flat-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-flat-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-stroked-button,
.gvCompanionRoot.gmat-button.mat-stroked-button,
.gvCompanionRoot .gmat-button .mat-stroked-button,
.gvCompanionRoot .gmat-button.mat-stroked-button,
.gmat-button .gvCompanionRoot .mat-stroked-button,
.gmat-button .gvCompanionRoot.mat-stroked-button {
  border-color: rgb(57, 49, 45);
}

.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]),
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]),
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]),
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]),
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]),
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(255, 134, 148);
}

.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):hover,
.gvCompanionRoot.gmat-button .mat-stroked-button:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-stroked-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-stroked-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-stroked-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-stroked-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-stroked-button:not([disabled]):focus {
  border-color: rgb(131, 54, 61);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn {
  border-color: rgb(57, 49, 45);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(38, 207, 218);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-warn:not([disabled]):focus {
  border-color: rgb(12, 110, 117);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent {
  border-color: rgb(57, 49, 45);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-stroked-button.mat-accent:not([disabled]):focus {
  border-color: rgb(57, 49, 45);
}

.gvCompanionRoot.gmat-button .mat-raised-button,
.gvCompanionRoot.gmat-button.mat-raised-button,
.gvCompanionRoot .gmat-button .mat-raised-button,
.gvCompanionRoot .gmat-button.mat-raised-button,
.gmat-button .gvCompanionRoot .mat-raised-button,
.gmat-button .gvCompanionRoot.mat-raised-button {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]),
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]),
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]),
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]),
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]),
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(0, 121, 107);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):hover {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-raised-button:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-raised-button:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-raised-button:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-raised-button:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-raised-button:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-raised-button:not([disabled]):active {
  box-shadow: rgba(0, 121, 107, 0.3) 0px 1px 2px 0px, rgba(0, 121, 107, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvCompanionRoot.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvCompanionRoot.gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gvCompanionRoot .gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvCompanionRoot .gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvCompanionRoot .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvCompanionRoot.mat-raised-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvCompanionRoot.gmat-button .mat-button:not([disabled]),
.gvCompanionRoot.gmat-button.mat-button:not([disabled]),
.gvCompanionRoot .gmat-button .mat-button:not([disabled]),
.gvCompanionRoot .gmat-button.mat-button:not([disabled]),
.gmat-button .gvCompanionRoot .mat-button:not([disabled]),
.gmat-button .gvCompanionRoot.mat-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 134, 148);
}

.gvCompanionRoot.gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(0, 137, 123);
}

.gvCompanionRoot.gmat-button .mat-button.mat-warn:not([disabled]),
.gvCompanionRoot.gmat-button.mat-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button .mat-button.mat-warn:not([disabled]),
.gvCompanionRoot .gmat-button.mat-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot .mat-button.mat-warn:not([disabled]),
.gmat-button .gvCompanionRoot.mat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvCompanionRoot.gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot.gmat-button .mat-button.mat-accent:not([disabled]),
.gvCompanionRoot.gmat-button.mat-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button .mat-button.mat-accent:not([disabled]),
.gvCompanionRoot .gmat-button.mat-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot .mat-button.mat-accent:not([disabled]),
.gmat-button .gvCompanionRoot.mat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 156, 151);
}

.gvCompanionRoot.gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot.gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvCompanionRoot .gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvCompanionRoot.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvCompanionRoot.gmat-button .mat-flat-button[disabled],
.gvCompanionRoot.gmat-button .mat-stroked-button[disabled],
.gvCompanionRoot.gmat-button .mat-raised-button[disabled],
.gvCompanionRoot.gmat-button .mat-button[disabled],
.gvCompanionRoot.gmat-button.mat-flat-button[disabled],
.gvCompanionRoot.gmat-button.mat-stroked-button[disabled],
.gvCompanionRoot.gmat-button.mat-raised-button[disabled],
.gvCompanionRoot.gmat-button.mat-button[disabled],
.gvCompanionRoot .gmat-button .mat-flat-button[disabled],
.gvCompanionRoot .gmat-button .mat-stroked-button[disabled],
.gvCompanionRoot .gmat-button .mat-raised-button[disabled],
.gvCompanionRoot .gmat-button .mat-button[disabled],
.gvCompanionRoot .gmat-button.mat-flat-button[disabled],
.gvCompanionRoot .gmat-button.mat-stroked-button[disabled],
.gvCompanionRoot .gmat-button.mat-raised-button[disabled],
.gvCompanionRoot .gmat-button.mat-button[disabled],
.gmat-button .gvCompanionRoot .mat-flat-button[disabled],
.gmat-button .gvCompanionRoot .mat-stroked-button[disabled],
.gmat-button .gvCompanionRoot .mat-raised-button[disabled],
.gmat-button .gvCompanionRoot .mat-button[disabled],
.gmat-button .gvCompanionRoot.mat-flat-button[disabled],
.gmat-button .gvCompanionRoot.mat-stroked-button[disabled],
.gmat-button .gvCompanionRoot.mat-raised-button[disabled],
.gmat-button .gvCompanionRoot.mat-button[disabled] {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvCompanionRoot .mat-form-field-label,
.gvCompanionRoot .mat-hint {
  color: rgb(128, 134, 139);
}

.gvCompanionRoot .mat-form-field-appearance-outline .mat-form-field-outline,
.gvCompanionRoot .mat-form-field-appearance-outline .mat-form-field-outline-thick {
  color: rgb(218, 220, 224);
}

.gvCompanionRoot .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {
  color: rgba(218, 220, 224, 0.38);
}

.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-label,
.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-label.mat-tab-label-active,
.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-link.mat-tab-label-active {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .gmat-tabs.mat-primary .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvCompanionRoot .gmat-tabs.mat-primary .mat-ink-bar {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-label,
.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-label.mat-tab-label-active,
.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-link.mat-tab-label-active {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .gmat-tabs.mat-accent .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvCompanionRoot .gmat-tabs.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-label,
.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-label.mat-tab-label-active,
.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-link.mat-tab-label-active {
  color: rgb(38, 207, 218);
}

.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-label.mat-tab-disabled,
.gvCompanionRoot .gmat-tabs.mat-warn .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvCompanionRoot .gmat-tabs.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvCompanionRoot .gmat-tabs .mat-tab-label.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvCompanionRoot .gmat-tabs .mat-tab-link.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled) {
  background-color: rgba(60, 64, 67, 0.12);
}

.gvCompanionRoot .gmat-tabs .mat-tab-label .mat-ripple-element,
.gvCompanionRoot .gmat-tabs .mat-tab-link .mat-ripple-element {
  background-color: rgba(0, 121, 107, 0.12);
}

.gvCompanionRoot .xap-inline-dialog-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-ripple-element {
  background-color: rgba(0, 0, 0, 0.1);
}

.gvMeet .mat-option {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-option:hover:not(.mat-option-disabled),
.gvMeet .mat-option:focus:not(.mat-option-disabled),
.gvMeet .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvMeet .mat-option.mat-active {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-option.mat-option-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-optgroup-label {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-optgroup-disabled .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-pseudo-checkbox {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-pseudo-checkbox::after {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-pseudo-checkbox-disabled {
  color: rgb(176, 176, 176);
}

.gvMeet .mat-primary .mat-pseudo-checkbox-checked,
.gvMeet .mat-primary .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-pseudo-checkbox-checked,
.gvMeet .mat-pseudo-checkbox-indeterminate,
.gvMeet .mat-accent .mat-pseudo-checkbox-checked,
.gvMeet .mat-accent .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-warn .mat-pseudo-checkbox-checked,
.gvMeet .mat-warn .mat-pseudo-checkbox-indeterminate {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,
.gvMeet .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-image: initial;
  background-color: rgb(117, 117, 117);
}

.gvMeet .mat-app-background,
.gvMeet.mat-app-background {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-elevation-z0 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-elevation-z1 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvMeet .mat-elevation-z2 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvMeet .mat-elevation-z3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvMeet .mat-elevation-z4 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvMeet .mat-elevation-z5 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
}

.gvMeet .mat-elevation-z6 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvMeet .mat-elevation-z7 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
}

.gvMeet .mat-elevation-z8 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvMeet .mat-elevation-z9 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
}

.gvMeet .mat-elevation-z10 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
}

.gvMeet .mat-elevation-z11 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
}

.gvMeet .mat-elevation-z12 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvMeet .mat-elevation-z13 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
}

.gvMeet .mat-elevation-z14 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
}

.gvMeet .mat-elevation-z15 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}

.gvMeet .mat-elevation-z16 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvMeet .mat-elevation-z17 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
}

.gvMeet .mat-elevation-z18 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
}

.gvMeet .mat-elevation-z19 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
}

.gvMeet .mat-elevation-z20 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
}

.gvMeet .mat-elevation-z21 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
}

.gvMeet .mat-elevation-z22 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
}

.gvMeet .mat-elevation-z23 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
}

.gvMeet .mat-elevation-z24 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
}

.gvMeet .mat-autocomplete-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-autocomplete-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvMeet .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-badge-accent .mat-badge-content {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-badge-warn .mat-badge-content {
  color: rgb(255, 255, 255);
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-badge-disabled .mat-badge-content {
  background-image: initial;
  background-color: rgb(104, 104, 104);
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-bottom-sheet-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-button,
.gvMeet .mat-icon-button,
.gvMeet .mat-stroked-button {
  color: inherit;
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
}

.gvMeet .mat-button.mat-primary,
.gvMeet .mat-icon-button.mat-primary,
.gvMeet .mat-stroked-button.mat-primary {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-button.mat-accent,
.gvMeet .mat-icon-button.mat-accent,
.gvMeet .mat-stroked-button.mat-accent {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-button.mat-warn,
.gvMeet .mat-icon-button.mat-warn,
.gvMeet .mat-stroked-button.mat-warn {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-button.mat-primary.mat-button-disabled,
.gvMeet .mat-button.mat-accent.mat-button-disabled,
.gvMeet .mat-button.mat-warn.mat-button-disabled,
.gvMeet .mat-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-icon-button.mat-primary.mat-button-disabled,
.gvMeet .mat-icon-button.mat-accent.mat-button-disabled,
.gvMeet .mat-icon-button.mat-warn.mat-button-disabled,
.gvMeet .mat-icon-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-stroked-button.mat-primary.mat-button-disabled,
.gvMeet .mat-stroked-button.mat-accent.mat-button-disabled,
.gvMeet .mat-stroked-button.mat-warn.mat-button-disabled,
.gvMeet .mat-stroked-button.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvMeet .mat-button.mat-primary .mat-button-focus-overlay,
.gvMeet .mat-icon-button.mat-primary .mat-button-focus-overlay,
.gvMeet .mat-stroked-button.mat-primary .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-button.mat-accent .mat-button-focus-overlay,
.gvMeet .mat-icon-button.mat-accent .mat-button-focus-overlay,
.gvMeet .mat-stroked-button.mat-accent .mat-button-focus-overlay {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-button.mat-warn .mat-button-focus-overlay,
.gvMeet .mat-icon-button.mat-warn .mat-button-focus-overlay,
.gvMeet .mat-stroked-button.mat-warn .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-button.mat-button-disabled .mat-button-focus-overlay,
.gvMeet .mat-icon-button.mat-button-disabled .mat-button-focus-overlay,
.gvMeet .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.gvMeet .mat-button .mat-ripple-element,
.gvMeet .mat-icon-button .mat-ripple-element,
.gvMeet .mat-stroked-button .mat-ripple-element {
  background-color: currentcolor;
}

.gvMeet .mat-button-focus-overlay {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-stroked-button:not(.mat-button-disabled) {
  border-color: rgb(79, 74, 66);
}

.gvMeet .mat-flat-button,
.gvMeet .mat-raised-button,
.gvMeet .mat-fab,
.gvMeet .mat-mini-fab {
  color: rgb(223, 222, 219);
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-flat-button.mat-primary,
.gvMeet .mat-raised-button.mat-primary,
.gvMeet .mat-fab.mat-primary,
.gvMeet .mat-mini-fab.mat-primary,
.gvMeet .mat-flat-button.mat-accent,
.gvMeet .mat-raised-button.mat-accent,
.gvMeet .mat-fab.mat-accent,
.gvMeet .mat-mini-fab.mat-accent,
.gvMeet .mat-flat-button.mat-warn,
.gvMeet .mat-raised-button.mat-warn,
.gvMeet .mat-fab.mat-warn,
.gvMeet .mat-mini-fab.mat-warn {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-flat-button.mat-primary.mat-button-disabled,
.gvMeet .mat-flat-button.mat-accent.mat-button-disabled,
.gvMeet .mat-flat-button.mat-warn.mat-button-disabled,
.gvMeet .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-raised-button.mat-primary.mat-button-disabled,
.gvMeet .mat-raised-button.mat-accent.mat-button-disabled,
.gvMeet .mat-raised-button.mat-warn.mat-button-disabled,
.gvMeet .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-fab.mat-primary.mat-button-disabled,
.gvMeet .mat-fab.mat-accent.mat-button-disabled,
.gvMeet .mat-fab.mat-warn.mat-button-disabled,
.gvMeet .mat-fab.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-primary.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-accent.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-warn.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  color: rgba(255, 255, 255, 0.26);
}

.gvMeet .mat-flat-button.mat-primary,
.gvMeet .mat-raised-button.mat-primary,
.gvMeet .mat-fab.mat-primary,
.gvMeet .mat-mini-fab.mat-primary {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-flat-button.mat-accent,
.gvMeet .mat-raised-button.mat-accent,
.gvMeet .mat-fab.mat-accent,
.gvMeet .mat-mini-fab.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-flat-button.mat-warn,
.gvMeet .mat-raised-button.mat-warn,
.gvMeet .mat-fab.mat-warn,
.gvMeet .mat-mini-fab.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-flat-button.mat-primary.mat-button-disabled,
.gvMeet .mat-flat-button.mat-accent.mat-button-disabled,
.gvMeet .mat-flat-button.mat-warn.mat-button-disabled,
.gvMeet .mat-flat-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-raised-button.mat-primary.mat-button-disabled,
.gvMeet .mat-raised-button.mat-accent.mat-button-disabled,
.gvMeet .mat-raised-button.mat-warn.mat-button-disabled,
.gvMeet .mat-raised-button.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-fab.mat-primary.mat-button-disabled,
.gvMeet .mat-fab.mat-accent.mat-button-disabled,
.gvMeet .mat-fab.mat-warn.mat-button-disabled,
.gvMeet .mat-fab.mat-button-disabled.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-primary.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-accent.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-warn.mat-button-disabled,
.gvMeet .mat-mini-fab.mat-button-disabled.mat-button-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvMeet .mat-flat-button.mat-primary .mat-ripple-element,
.gvMeet .mat-raised-button.mat-primary .mat-ripple-element,
.gvMeet .mat-fab.mat-primary .mat-ripple-element,
.gvMeet .mat-mini-fab.mat-primary .mat-ripple-element,
.gvMeet .mat-flat-button.mat-accent .mat-ripple-element,
.gvMeet .mat-raised-button.mat-accent .mat-ripple-element,
.gvMeet .mat-fab.mat-accent .mat-ripple-element,
.gvMeet .mat-mini-fab.mat-accent .mat-ripple-element,
.gvMeet .mat-flat-button.mat-warn .mat-ripple-element,
.gvMeet .mat-raised-button.mat-warn .mat-ripple-element,
.gvMeet .mat-fab.mat-warn .mat-ripple-element,
.gvMeet .mat-mini-fab.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvMeet .mat-stroked-button:not([class*="mat-elevation-z"]),
.gvMeet .mat-flat-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-raised-button:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvMeet .mat-raised-button:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gvMeet .mat-raised-button.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-fab:not([class*="mat-elevation-z"]),
.gvMeet .mat-mini-fab:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvMeet .mat-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]),
.gvMeet .mat-mini-fab:not(.mat-button-disabled):active:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
}

.gvMeet .mat-fab.mat-button-disabled:not([class*="mat-elevation-z"]),
.gvMeet .mat-mini-fab.mat-button-disabled:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-button-toggle-standalone,
.gvMeet .mat-button-toggle-group {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvMeet .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvMeet .mat-button-toggle-group-appearance-standard {
  box-shadow: none;
}

.gvMeet .mat-button-toggle {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-button-toggle .mat-button-toggle-focus-overlay {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvMeet .mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: rgb(79, 74, 66);
}

.gvMeet [dir="rtl"] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvMeet .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle {
  border-left-color: initial;
  border-right-color: initial;
  border-top-color: rgb(79, 74, 66);
}

.gvMeet .mat-button-toggle-checked {
  background-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gvMeet .mat-button-toggle-checked.mat-button-toggle-appearance-standard {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-button-toggle-disabled {
  color: rgba(255, 255, 255, 0.26);
  background-color: rgb(66, 60, 51);
}

.gvMeet .mat-button-toggle-disabled.mat-button-toggle-appearance-standard {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: rgb(107, 101, 92);
}

.gvMeet .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.gvMeet .mat-button-toggle-group-appearance-standard {
  border-color: rgb(79, 74, 66);
}

.gvMeet .mat-card {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-card:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvMeet .mat-card.mat-card-flat:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-card-subtitle {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-checkbox-frame {
  border-color: rgb(95, 99, 104);
}

.gvMeet .mat-checkbox-mixedmark {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background,
.gvMeet .mat-checkbox-checked.mat-primary .mat-checkbox-background {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
.gvMeet .mat-checkbox-checked.mat-accent .mat-checkbox-background {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background,
.gvMeet .mat-checkbox-checked.mat-warn .mat-checkbox-background {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,
.gvMeet .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {
  background-color: rgb(117, 117, 117);
}

.gvMeet .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {
  border-color: rgb(117, 117, 117);
}

.gvMeet .mat-checkbox-disabled .mat-checkbox-label {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-checkbox .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,
.gvMeet .mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {
  background-image: initial;
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,
.gvMeet .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {
  background-image: initial;
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,
.gvMeet .mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {
  background-image: initial;
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-chip.mat-standard-chip {
  background-color: rgb(79, 74, 66);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-chip.mat-standard-chip .mat-chip-remove {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.gvMeet .mat-chip.mat-standard-chip::after {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.1);
}

.gvMeet .mat-table {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-table thead,
.gvMeet .mat-table tbody,
.gvMeet .mat-table tfoot,
.gvMeet mat-header-row,
.gvMeet mat-row,
.gvMeet mat-footer-row,
.gvMeet [mat-header-row],
.gvMeet [mat-row],
.gvMeet [mat-footer-row],
.gvMeet .mat-table-sticky {
  background-image: inherit;
  background-color: inherit;
}

.gvMeet mat-row,
.gvMeet mat-header-row,
.gvMeet mat-footer-row,
.gvMeet th.mat-header-cell,
.gvMeet td.mat-cell,
.gvMeet td.mat-footer-cell {
  border-bottom-color: rgb(79, 74, 66);
}

.gvMeet .mat-header-cell {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-cell,
.gvMeet .mat-footer-cell {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-calendar-arrow {
  border-top-color: rgb(95, 99, 104);
}

.gvMeet .mat-datepicker-toggle,
.gvMeet .mat-datepicker-content .mat-calendar-next-button,
.gvMeet .mat-datepicker-content .mat-calendar-previous-button {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-calendar-table-header {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-calendar-table-header-divider::after {
  background-image: initial;
  background-color: rgb(79, 74, 66);
}

.gvMeet .mat-calendar-body-label {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-calendar-body-cell-content,
.gvMeet .mat-date-range-input-separator {
  color: rgb(223, 222, 219);
  border-color: rgba(0, 0, 0, 0);
}

.gvMeet .mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .mat-form-field-disabled .mat-date-range-input-separator {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-bVEB4e {
  color: rgb(218, 220, 224);
}

.gvMeet .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  border-color: rgba(0, 0, 0, 0.18);
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(26, 115, 232, 0.2);
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvMeet [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(26, 115, 232, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvMeet [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(26, 115, 232, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvMeet .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvMeet .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvMeet .mat-calendar-body-selected {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(26, 115, 232, 0.4);
}

.gvMeet .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvMeet .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(26, 115, 232, 0.3);
}

.gvMeet .mat-datepicker-content {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.2);
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvMeet .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvMeet .mat-datepicker-content.mat-accent [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(95, 99, 104, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvMeet .mat-datepicker-content.mat-accent .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvMeet .mat-datepicker-content.mat-accent .mat-calendar-body-selected {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(95, 99, 104, 0.4);
}

.gvMeet .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvMeet .mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(95, 99, 104, 0.3);
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(217, 48, 37, 0.2);
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe::before {
  background-image: initial;
  background-color: rgba(83, 137, 255, 0.2);
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before,
.gvMeet .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before {
  background-image: linear-gradient(to right, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-CpWD9d::before,
.gvMeet .mat-datepicker-content.mat-warn [dir="rtl"] .VxS2Ke-HrRdod-qJTHM-wmH8Cc-Ujjvbf-I3Yihd::before {
  background-image: linear-gradient(to left, rgba(217, 48, 37, 0.2) 50%, rgba(83, 137, 255, 0.2) 50%);
  background-color: initial;
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe>.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc,
.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe.VxS2Ke-HrRdod-qJTHM-bEDTcc-vhhrIe::after {
  background-image: initial;
  background-color: rgb(141, 60, 120);
}

.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc.mat-calendar-body-selected,
.gvMeet .mat-datepicker-content.mat-warn .VxS2Ke-HrRdod-qJTHM-bEDTcc-wmH8Cc-vhhrIe>.mat-calendar-body-selected {
  background-image: initial;
  background-color: rgb(70, 163, 94);
}

.gvMeet .mat-datepicker-content.mat-warn .mat-calendar-body-selected {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected {
  background-color: rgba(217, 48, 37, 0.4);
}

.gvMeet .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
}

.gvMeet .mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc),
.gvMeet .mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.VxS2Ke-HrRdod-qJTHM-wmH8Cc-DJhFCc) {
  background-color: rgba(217, 48, 37, 0.3);
}

.gvMeet .mat-datepicker-content-touch {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-datepicker-toggle-active {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-datepicker-toggle-active.mat-accent {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-datepicker-toggle-active.mat-warn {
  color: rgb(38, 207, 218);
}

.gvMeet .VxS2Ke-gElRsf-vhhrIe-YPqjbf-SmKAyb[disabled] {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-dialog-container {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-divider {
  border-top-color: rgb(79, 74, 66);
}

.gvMeet .mat-divider-vertical {
  border-right-color: rgb(79, 74, 66);
}

.gvMeet .mat-expansion-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-expansion-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.gvMeet .mat-action-row {
  border-top-color: rgb(79, 74, 66);
}

.gvMeet .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled="true"]),
.gvMeet .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled="true"]),
.gvMeet .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled="true"]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvMeet .mat-expansion-panel:not(.mat-expanded):not([aria-disabled="true"]) .mat-expansion-panel-header:hover {
    background-image: initial;
    background-color: rgb(38, 38, 38);
  }
}

.gvMeet .mat-expansion-panel-header-title {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-expansion-panel-header-description,
.gvMeet .mat-expansion-indicator::after {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-expansion-panel-header[aria-disabled="true"] {
  color: rgba(255, 255, 255, 0.26);
}

.gvMeet .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-title,
.gvMeet .mat-expansion-panel-header[aria-disabled="true"] .mat-expansion-panel-header-description {
  color: inherit;
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-label {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-label.mat-accent {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-label.mat-warn {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-focused .mat-form-field-required-marker {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field-ripple {
  background-color: rgba(79, 74, 66, 0.87);
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-ripple {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after,
.gvMeet .mat-form-field.mat-form-field-invalid .mat-form-field-label,
.gvMeet .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
.gvMeet .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
.gvMeet .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-error {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-form-field-appearance-legacy .mat-form-field-label,
.gvMeet .mat-form-field-appearance-legacy .mat-hint {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field-appearance-legacy .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvMeet .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvMeet .mat-form-field-appearance-standard .mat-form-field-underline {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvMeet .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(79, 74, 66, 0.42) 0%, rgba(79, 74, 66, 0.42) 33%, rgba(0, 0, 0, 0) 0%);
}

.gvMeet .mat-form-field-appearance-fill .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.04);
}

.gvMeet .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {
  background-color: rgba(0, 0, 0, 0.02);
}

.gvMeet .mat-form-field-appearance-fill .mat-form-field-underline::before {
  background-color: rgba(79, 74, 66, 0.42);
}

.gvMeet .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {
  background-color: rgba(0, 0, 0, 0);
}

.gvMeet .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,
.gvMeet .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-icon.mat-primary {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-icon.mat-accent {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-icon.mat-warn {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-form-field-type-mat-native-select .mat-form-field-infix::after {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-input-element:disabled,
.gvMeet .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-list-base .mat-list-item,
.gvMeet .mat-list-base .mat-list-option {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-list-base .mat-subheader {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-list-item-disabled {
  background-color: rgb(66, 60, 51);
}

.gvMeet .mat-list-option:hover,
.gvMeet .mat-list-option:focus,
.gvMeet .mat-nav-list .mat-list-item:hover,
.gvMeet .mat-nav-list .mat-list-item:focus,
.gvMeet .mat-action-list .mat-list-item:hover,
.gvMeet .mat-action-list .mat-list-item:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvMeet .mat-list-single-selected-option,
.gvMeet .mat-list-single-selected-option:hover,
.gvMeet .mat-list-single-selected-option:focus {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvMeet .mat-menu-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-menu-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvMeet .mat-menu-item {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-menu-item[disabled],
.gvMeet .mat-menu-item[disabled]::after,
.gvMeet .mat-menu-item[disabled] .mat-icon-no-color {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-menu-item .mat-icon-no-color,
.gvMeet .mat-menu-item-submenu-trigger::after {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-menu-item:hover:not([disabled]),
.gvMeet .mat-menu-item.cdk-program-focused:not([disabled]),
.gvMeet .mat-menu-item.cdk-keyboard-focused:not([disabled]),
.gvMeet .mat-menu-item-highlighted:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.04);
}

.gvMeet .mat-paginator {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(160, 156, 151);
}

.gvMeet .mat-paginator-page-size .mat-select-trigger {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-paginator-decrement,
.gvMeet .mat-paginator-increment {
  border-top-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
}

.gvMeet .mat-paginator-first,
.gvMeet .mat-paginator-last {
  border-top-color: rgb(95, 99, 104);
}

.gvMeet .mat-icon-button[disabled] .mat-paginator-decrement,
.gvMeet .mat-icon-button[disabled] .mat-paginator-increment,
.gvMeet .mat-icon-button[disabled] .mat-paginator-first,
.gvMeet .mat-icon-button[disabled] .mat-paginator-last {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-progress-bar-buffer {
  background-color: rgb(126, 78, 13);
}

.gvMeet .mat-progress-bar-fill::after {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-progress-bar.mat-accent .mat-progress-bar-buffer {
  background-color: rgb(79, 77, 75);
}

.gvMeet .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-progress-bar.mat-warn .mat-progress-bar-buffer {
  background-color: rgb(20, 115, 120);
}

.gvMeet .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.gvMeet .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(26, 115, 232);
}

.gvMeet .mat-radio-button.mat-primary .mat-radio-inner-circle,
.gvMeet .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvMeet .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
.gvMeet .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(95, 99, 104);
}

.gvMeet .mat-radio-button.mat-accent .mat-radio-inner-circle,
.gvMeet .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvMeet .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
.gvMeet .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {
  border-color: rgb(217, 48, 37);
}

.gvMeet .mat-radio-button.mat-warn .mat-radio-inner-circle,
.gvMeet .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
.gvMeet .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
.gvMeet .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
.gvMeet .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
.gvMeet .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-radio-button.mat-radio-disabled .mat-radio-label-content {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-radio-button .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-select-value {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-select-disabled .mat-select-value {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-select-panel {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-select-panel:not([class*="mat-elevation-z"]) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.gvMeet .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gvMeet .mat-form-field.mat-focused.mat-primary .mat-select-arrow {
  color: rgb(229, 140, 23);
}

.gvMeet .mat-form-field.mat-focused.mat-accent .mat-select-arrow {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-form-field.mat-focused.mat-warn .mat-select-arrow,
.gvMeet .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-drawer-container,
.gvMeet .mat-drawer {
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-drawer.mat-drawer-push {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-drawer:not(.mat-drawer-side) {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
}

.gvMeet .mat-drawer-side {
  border-right-color: rgb(79, 74, 66);
}

.gvMeet .mat-drawer-side.mat-drawer-end,
.gvMeet [dir="rtl"] .mat-drawer-side {
  border-left-color: rgb(79, 74, 66);
  border-right-color: initial;
}

.gvMeet [dir="rtl"] .mat-drawer-side.mat-drawer-end {
  border-left-color: initial;
  border-right-color: rgb(79, 74, 66);
}

.gvMeet .mat-drawer-backdrop.mat-drawer-shown {
  background-color: rgba(0, 0, 0, 0.6);
}

.gvMeet .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(95, 99, 104, 0.54);
}

.gvMeet .mat-slide-toggle.mat-checked .mat-ripple-element {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(26, 115, 232, 0.54);
}

.gvMeet .mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {
  background-color: rgba(217, 48, 37, 0.54);
}

.gvMeet .mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
  background-color: rgb(0, 0, 0);
}

.gvMeet .mat-slide-toggle-thumb {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: rgb(43, 43, 43);
}

.gvMeet .mat-slide-toggle-bar {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvMeet .mat-primary .mat-slider-track-fill,
.gvMeet .mat-primary .mat-slider-thumb,
.gvMeet .mat-primary .mat-slider-thumb-label {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-primary .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-primary .mat-slider-focus-ring {
  background-color: rgba(26, 115, 232, 0.2);
}

.gvMeet .mat-accent .mat-slider-track-fill,
.gvMeet .mat-accent .mat-slider-thumb,
.gvMeet .mat-accent .mat-slider-thumb-label {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-accent .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-accent .mat-slider-focus-ring {
  background-color: rgba(95, 99, 104, 0.2);
}

.gvMeet .mat-warn .mat-slider-track-fill,
.gvMeet .mat-warn .mat-slider-thumb,
.gvMeet .mat-warn .mat-slider-thumb-label {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-warn .mat-slider-thumb-label-text {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-warn .mat-slider-focus-ring {
  background-color: rgba(217, 48, 37, 0.2);
}

.gvMeet .mat-slider:hover .mat-slider-track-background,
.gvMeet .cdk-focused .mat-slider-track-background {
  background-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-slider-disabled .mat-slider-track-background,
.gvMeet .mat-slider-disabled .mat-slider-track-fill,
.gvMeet .mat-slider-disabled .mat-slider-thumb,
.gvMeet .mat-slider-disabled:hover .mat-slider-track-background {
  background-color: rgb(107, 101, 92);
}

.gvMeet .mat-slider-min-value .mat-slider-focus-ring {
  background-color: rgba(0, 0, 0, 0.12);
}

.gvMeet .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
.gvMeet .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {
  background-color: rgb(32, 33, 36);
}

.gvMeet .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
.gvMeet .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {
  background-color: rgb(107, 101, 92);
}

.gvMeet .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
  background-color: rgba(0, 0, 0, 0);
}

.gvMeet .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb,
.gvMeet .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb,
.gvMeet .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {
  border-color: rgb(107, 101, 92);
}

.gvMeet .mat-slider-has-ticks .mat-slider-wrapper::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.gvMeet .mat-slider-horizontal .mat-slider-ticks {
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvMeet .mat-slider-vertical .mat-slider-ticks {
  background-image: repeating-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, rgba(0, 0, 0, 0) 0px, transparent);
}

.gvMeet .mat-step-header.cdk-keyboard-focused,
.gvMeet .mat-step-header.cdk-program-focused,
.gvMeet .mat-step-header:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
  .gvMeet .mat-step-header:hover {
    background-image: none;
    background-color: initial;
  }
}

.gvMeet .mat-step-header .mat-step-label,
.gvMeet .mat-step-header .mat-step-optional {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-step-header .mat-step-icon {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header .mat-step-icon-selected,
.gvMeet .mat-step-header .mat-step-icon-state-done,
.gvMeet .mat-step-header .mat-step-icon-state-edit {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header.mat-accent .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header.mat-accent .mat-step-icon-selected,
.gvMeet .mat-step-header.mat-accent .mat-step-icon-state-done,
.gvMeet .mat-step-header.mat-accent .mat-step-icon-state-edit {
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header.mat-warn .mat-step-icon {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header.mat-warn .mat-step-icon-selected,
.gvMeet .mat-step-header.mat-warn .mat-step-icon-state-done,
.gvMeet .mat-step-header.mat-warn .mat-step-icon-state-edit {
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-step-header .mat-step-icon-state-error {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvMeet .mat-step-header .mat-step-label.mat-step-label-active {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-step-header .mat-step-label.mat-step-label-error {
  color: rgb(38, 207, 218);
}

.gvMeet .mat-stepper-horizontal,
.gvMeet .mat-stepper-vertical {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-stepper-vertical-line::before {
  border-left-color: rgb(79, 74, 66);
}

.gvMeet .mat-horizontal-stepper-header::before,
.gvMeet .mat-horizontal-stepper-header::after,
.gvMeet .mat-stepper-horizontal-line {
  border-top-color: rgb(79, 74, 66);
}

.gvMeet .mat-sort-header-arrow {
  color: rgb(160, 156, 151);
}

.gvMeet .mat-tab-nav-bar,
.gvMeet .mat-tab-header {
  border-bottom-color: rgb(79, 74, 66);
}

.gvMeet .mat-tab-group-inverted-header .mat-tab-nav-bar,
.gvMeet .mat-tab-group-inverted-header .mat-tab-header {
  border-top-color: rgb(79, 74, 66);
  border-bottom-color: initial;
}

.gvMeet .mat-tab-label,
.gvMeet .mat-tab-link {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.38);
}

.gvMeet .mat-tab-header-pagination-chevron {
  border-color: rgb(32, 33, 36);
}

.gvMeet .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(0, 0, 0, 0.38);
}

.gvMeet .mat-tab-group[class*="mat-background-"] .mat-tab-header,
.gvMeet .mat-tab-nav-bar[class*="mat-background-"] {
  border-bottom-color: initial;
  border-top-color: initial;
}

.gvMeet .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(189, 121, 11, 0.3);
}

.gvMeet .mat-tab-group.mat-primary .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-primary .mat-ink-bar {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvMeet .mat-tab-group.mat-accent .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvMeet .mat-tab-group.mat-warn .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,
.gvMeet .mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar {
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(189, 121, 11, 0.3);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-link-container,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header-pagination,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination {
  background-color: rgb(26, 115, 232);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvMeet .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(79, 74, 66, 0.3);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-link-container,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header-pagination,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination {
  background-color: rgb(95, 99, 104);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvMeet .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(12, 110, 117, 0.3);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-link-container,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header-pagination,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination {
  background-color: rgb(217, 48, 37);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link {
  color: rgb(255, 255, 255);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled {
  color: rgba(255, 255, 255, 0.4);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator::before,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator::before {
  border-color: rgb(38, 38, 38);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(38, 38, 38, 0.4);
}

.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,
.gvMeet .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element {
  background-color: rgba(38, 38, 38, 0.12);
}

.gvMeet .mat-toolbar {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  color: rgb(223, 222, 219);
}

.gvMeet .mat-toolbar.mat-primary {
  background-image: initial;
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-toolbar.mat-accent {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-toolbar.mat-warn {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet .mat-toolbar .mat-form-field-underline,
.gvMeet .mat-toolbar .mat-form-field-ripple,
.gvMeet .mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentcolor;
}

.gvMeet .mat-toolbar .mat-form-field-label,
.gvMeet .mat-toolbar .mat-focused .mat-form-field-label,
.gvMeet .mat-toolbar .mat-select-value,
.gvMeet .mat-toolbar .mat-select-arrow,
.gvMeet .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}

.gvMeet .mat-tooltip {
  background-image: initial;
  background-color: rgba(95, 99, 104, 0.9);
}

.gvMeet .mat-tree {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gvMeet .mat-tree-node,
.gvMeet .mat-nested-tree-node {
  color: rgb(223, 222, 219);
}

.gvMeet .mat-snack-bar-container {
  color: rgba(255, 255, 255, 0.7);
  background-image: initial;
  background-color: rgb(50, 50, 50);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
}

.gvMeet .mat-simple-snackbar-action {
  color: rgb(160, 156, 151);
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]),
.gvMeet.gmat-button.mat-flat-button:not([disabled]),
.gvMeet .gmat-button .mat-flat-button:not([disabled]),
.gvMeet .gmat-button.mat-flat-button:not([disabled]),
.gmat-button .gvMeet .mat-flat-button:not([disabled]),
.gmat-button .gvMeet.mat-flat-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]):focus,
.gvMeet.gmat-button .mat-flat-button:not([disabled]):hover,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):focus,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):hover,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):focus,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):hover,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):focus,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):hover,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):focus,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):hover,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):focus,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):hover {
  box-shadow: rgba(26, 115, 232, 0.3) 0px 1px 2px 0px, rgba(26, 115, 232, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-flat-button:not([disabled]):active,
.gvMeet.gmat-button.mat-flat-button:not([disabled]):active,
.gvMeet .gmat-button .mat-flat-button:not([disabled]):active,
.gvMeet .gmat-button.mat-flat-button:not([disabled]):active,
.gmat-button .gvMeet .mat-flat-button:not([disabled]):active,
.gmat-button .gvMeet.mat-flat-button:not([disabled]):active {
  box-shadow: rgba(26, 115, 232, 0.3) 0px 1px 2px 0px, rgba(26, 115, 232, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]),
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]),
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvMeet.gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gvMeet .gmat-button .mat-flat-button.mat-warn:not([disabled]):active,
.gvMeet .gmat-button.mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvMeet .mat-flat-button.mat-warn:not([disabled]):active,
.gmat-button .gvMeet.mat-flat-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]),
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]),
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvMeet.gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gvMeet .gmat-button .mat-flat-button.mat-accent:not([disabled]):active,
.gvMeet .gmat-button.mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvMeet .mat-flat-button.mat-accent:not([disabled]):active,
.gmat-button .gvMeet.mat-flat-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-stroked-button,
.gvMeet.gmat-button.mat-stroked-button,
.gvMeet .gmat-button .mat-stroked-button,
.gvMeet .gmat-button.mat-stroked-button,
.gmat-button .gvMeet .mat-stroked-button,
.gmat-button .gvMeet.mat-stroked-button {
  border-color: rgb(57, 49, 45);
}

.gvMeet.gmat-button .mat-stroked-button:not([disabled]),
.gvMeet.gmat-button.mat-stroked-button:not([disabled]),
.gvMeet .gmat-button .mat-stroked-button:not([disabled]),
.gvMeet .gmat-button.mat-stroked-button:not([disabled]),
.gmat-button .gvMeet .mat-stroked-button:not([disabled]),
.gmat-button .gvMeet.mat-stroked-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(229, 140, 23);
}

.gvMeet.gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-stroked-button:not([disabled]):hover,
.gvMeet.gmat-button .mat-stroked-button:not([disabled]):focus,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):hover,
.gvMeet.gmat-button.mat-stroked-button:not([disabled]):focus,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):hover,
.gvMeet .gmat-button .mat-stroked-button:not([disabled]):focus,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):hover,
.gvMeet .gmat-button.mat-stroked-button:not([disabled]):focus,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):hover,
.gmat-button .gvMeet .mat-stroked-button:not([disabled]):focus,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):hover,
.gmat-button .gvMeet.mat-stroked-button:not([disabled]):focus {
  border-color: rgb(117, 73, 8);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn,
.gvMeet.gmat-button.mat-stroked-button.mat-warn,
.gvMeet .gmat-button .mat-stroked-button.mat-warn,
.gvMeet .gmat-button.mat-stroked-button.mat-warn,
.gmat-button .gvMeet .mat-stroked-button.mat-warn,
.gmat-button .gvMeet.mat-stroked-button.mat-warn {
  border-color: rgb(57, 49, 45);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]),
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]),
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(38, 207, 218);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvMeet.gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvMeet.gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button .mat-stroked-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button.mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet .mat-stroked-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet.mat-stroked-button.mat-warn:not([disabled]):focus {
  border-color: rgb(12, 110, 117);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent,
.gvMeet.gmat-button.mat-stroked-button.mat-accent,
.gvMeet .gmat-button .mat-stroked-button.mat-accent,
.gvMeet .gmat-button.mat-stroked-button.mat-accent,
.gmat-button .gvMeet .mat-stroked-button.mat-accent,
.gmat-button .gvMeet.mat-stroked-button.mat-accent {
  border-color: rgb(57, 49, 45);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]),
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]),
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(79, 74, 66);
  color: rgb(160, 156, 151);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvMeet.gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvMeet.gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button .mat-stroked-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button.mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet .mat-stroked-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet.mat-stroked-button.mat-accent:not([disabled]):focus {
  border-color: rgb(57, 49, 45);
}

.gvMeet.gmat-button .mat-raised-button,
.gvMeet.gmat-button.mat-raised-button,
.gvMeet .gmat-button .mat-raised-button,
.gvMeet .gmat-button.mat-raised-button,
.gmat-button .gvMeet .mat-raised-button,
.gmat-button .gvMeet.mat-raised-button {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]),
.gvMeet.gmat-button.mat-raised-button:not([disabled]),
.gvMeet .gmat-button .mat-raised-button:not([disabled]),
.gvMeet .gmat-button.mat-raised-button:not([disabled]),
.gmat-button .gvMeet .mat-raised-button:not([disabled]),
.gmat-button .gvMeet.mat-raised-button:not([disabled]) {
  background-image: initial;
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]):focus,
.gvMeet.gmat-button .mat-raised-button:not([disabled]):hover,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):focus,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):hover,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):focus,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):hover,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):focus,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):hover,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):focus,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):hover,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):focus,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):hover {
  box-shadow: rgba(26, 115, 232, 0.3) 0px 1px 2px 0px, rgba(26, 115, 232, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-raised-button:not([disabled]):active,
.gvMeet.gmat-button.mat-raised-button:not([disabled]):active,
.gvMeet .gmat-button .mat-raised-button:not([disabled]):active,
.gvMeet .gmat-button.mat-raised-button:not([disabled]):active,
.gmat-button .gvMeet .mat-raised-button:not([disabled]):active,
.gmat-button .gvMeet.mat-raised-button:not([disabled]):active {
  box-shadow: rgba(26, 115, 232, 0.3) 0px 1px 2px 0px, rgba(26, 115, 232, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]),
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]),
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgb(217, 48, 37);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):hover,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):focus,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):hover,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):focus,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):hover {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvMeet.gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gvMeet .gmat-button .mat-raised-button.mat-warn:not([disabled]):active,
.gvMeet .gmat-button.mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvMeet .mat-raised-button.mat-warn:not([disabled]):active,
.gmat-button .gvMeet.mat-raised-button.mat-warn:not([disabled]):active {
  box-shadow: rgba(217, 48, 37, 0.3) 0px 1px 2px 0px, rgba(217, 48, 37, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]),
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]),
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgb(95, 99, 104);
  color: rgb(255, 255, 255);
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(38, 38, 38);
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):hover,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):focus,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):hover,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):focus,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):hover {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 1px 3px 1px;
}

.gvMeet.gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvMeet.gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gvMeet .gmat-button .mat-raised-button.mat-accent:not([disabled]):active,
.gvMeet .gmat-button.mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvMeet .mat-raised-button.mat-accent:not([disabled]):active,
.gmat-button .gvMeet.mat-raised-button.mat-accent:not([disabled]):active {
  box-shadow: rgba(95, 99, 104, 0.3) 0px 1px 2px 0px, rgba(95, 99, 104, 0.15) 0px 2px 6px 2px;
}

.gvMeet.gmat-button .mat-button:not([disabled]),
.gvMeet.gmat-button.mat-button:not([disabled]),
.gvMeet .gmat-button .mat-button:not([disabled]),
.gvMeet .gmat-button.mat-button:not([disabled]),
.gmat-button .gvMeet .mat-button:not([disabled]),
.gmat-button .gvMeet.mat-button:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 140, 23);
}

.gvMeet.gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.gvMeet.gmat-button .mat-button.mat-warn:not([disabled]),
.gvMeet.gmat-button.mat-button.mat-warn:not([disabled]),
.gvMeet .gmat-button .mat-button.mat-warn:not([disabled]),
.gvMeet .gmat-button.mat-button.mat-warn:not([disabled]),
.gmat-button .gvMeet .mat-button.mat-warn:not([disabled]),
.gmat-button .gvMeet.mat-button.mat-warn:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(38, 207, 218);
}

.gvMeet.gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-warn:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-warn:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-warn:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-warn:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(217, 48, 37);
}

.gvMeet.gmat-button .mat-button.mat-accent:not([disabled]),
.gvMeet.gmat-button.mat-button.mat-accent:not([disabled]),
.gvMeet .gmat-button .mat-button.mat-accent:not([disabled]),
.gvMeet .gmat-button.mat-button.mat-accent:not([disabled]),
.gmat-button .gvMeet .mat-button.mat-accent:not([disabled]),
.gmat-button .gvMeet.mat-button.mat-accent:not([disabled]) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 156, 151);
}

.gvMeet.gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-accent:not([disabled]):hover .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-accent:not([disabled]):focus .mat-button-focus-overlay,
.gvMeet.gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-accent:not([disabled]):hover:focus .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet.gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gvMeet .gmat-button.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet .mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay,
.gmat-button .gvMeet.mat-button.mat-accent:not([disabled]):active .mat-button-focus-overlay {
  background-color: rgb(164, 159, 155);
}

.gvMeet.gmat-button .mat-flat-button[disabled],
.gvMeet.gmat-button .mat-stroked-button[disabled],
.gvMeet.gmat-button .mat-raised-button[disabled],
.gvMeet.gmat-button .mat-button[disabled],
.gvMeet.gmat-button.mat-flat-button[disabled],
.gvMeet.gmat-button.mat-stroked-button[disabled],
.gvMeet.gmat-button.mat-raised-button[disabled],
.gvMeet.gmat-button.mat-button[disabled],
.gvMeet .gmat-button .mat-flat-button[disabled],
.gvMeet .gmat-button .mat-stroked-button[disabled],
.gvMeet .gmat-button .mat-raised-button[disabled],
.gvMeet .gmat-button .mat-button[disabled],
.gvMeet .gmat-button.mat-flat-button[disabled],
.gvMeet .gmat-button.mat-stroked-button[disabled],
.gvMeet .gmat-button.mat-raised-button[disabled],
.gvMeet .gmat-button.mat-button[disabled],
.gmat-button .gvMeet .mat-flat-button[disabled],
.gmat-button .gvMeet .mat-stroked-button[disabled],
.gmat-button .gvMeet .mat-raised-button[disabled],
.gmat-button .gvMeet .mat-button[disabled],
.gmat-button .gvMeet.mat-flat-button[disabled],
.gmat-button .gvMeet.mat-stroked-button[disabled],
.gmat-button .gvMeet.mat-raised-button[disabled],
.gmat-button .gvMeet.mat-button[disabled] {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

.gvMeet .mat-form-field-label,
.gvMeet .mat-hint {
  color: rgb(128, 134, 139);
}

.gvMeet .mat-form-field-appearance-outline .mat-form-field-outline,
.gvMeet .mat-form-field-appearance-outline .mat-form-field-outline-thick {
  color: rgb(218, 220, 224);
}

.gvMeet .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {
  color: rgba(218, 220, 224, 0.38);
}

.gvMeet .gmat-tabs.mat-primary .mat-tab-label,
.gvMeet .gmat-tabs.mat-primary .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvMeet .gmat-tabs.mat-primary .mat-tab-label.mat-tab-label-active,
.gvMeet .gmat-tabs.mat-primary .mat-tab-link.mat-tab-label-active {
  color: rgb(229, 140, 23);
}

.gvMeet .gmat-tabs.mat-primary .mat-tab-label.mat-tab-disabled,
.gvMeet .gmat-tabs.mat-primary .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvMeet .gmat-tabs.mat-primary .mat-ink-bar {
  background-color: rgb(26, 115, 232);
}

.gvMeet .gmat-tabs.mat-accent .mat-tab-label,
.gvMeet .gmat-tabs.mat-accent .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvMeet .gmat-tabs.mat-accent .mat-tab-label.mat-tab-label-active,
.gvMeet .gmat-tabs.mat-accent .mat-tab-link.mat-tab-label-active {
  color: rgb(160, 156, 151);
}

.gvMeet .gmat-tabs.mat-accent .mat-tab-label.mat-tab-disabled,
.gvMeet .gmat-tabs.mat-accent .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvMeet .gmat-tabs.mat-accent .mat-ink-bar {
  background-color: rgb(95, 99, 104);
}

.gvMeet .gmat-tabs.mat-warn .mat-tab-label,
.gvMeet .gmat-tabs.mat-warn .mat-tab-link {
  color: rgb(160, 156, 151);
}

.gvMeet .gmat-tabs.mat-warn .mat-tab-label.mat-tab-label-active,
.gvMeet .gmat-tabs.mat-warn .mat-tab-link.mat-tab-label-active {
  color: rgb(38, 207, 218);
}

.gvMeet .gmat-tabs.mat-warn .mat-tab-label.mat-tab-disabled,
.gvMeet .gmat-tabs.mat-warn .mat-tab-link.mat-tab-disabled {
  color: rgb(189, 193, 198);
}

.gvMeet .gmat-tabs.mat-warn .mat-ink-bar {
  background-color: rgb(217, 48, 37);
}

.gvMeet .gmat-tabs .mat-tab-label.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled),
.gvMeet .gmat-tabs .mat-tab-link.cdk-focused.cdk-keyboard-focused:not(.mat-tab-disabled) {
  background-color: rgba(60, 64, 67, 0.12);
}

.gvMeet .gmat-tabs .mat-tab-label .mat-ripple-element,
.gvMeet .gmat-tabs .mat-tab-link .mat-ripple-element {
  background-color: rgba(26, 115, 232, 0.12);
}

.gvMeet .xap-inline-dialog-container {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  color: rgb(223, 222, 219);
}

.gmat-elevation-z0 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
}

.gmat-elevation-z1 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.gmat-elevation-z2 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gmat-elevation-z3 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 3px 0px, rgba(60, 64, 67, 0.15) 0px 4px 8px 3px;
}

.gmat-elevation-z4 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 2px 3px 0px, rgba(60, 64, 67, 0.15) 0px 6px 10px 4px;
}

.gmat-elevation-z5 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 4px 4px 0px, rgba(60, 64, 67, 0.15) 0px 8px 12px 6px;
}

xap-dialog-layout-title {
  color: rgb(195, 191, 188);
}

xap-dialog-layout-subtitle {
  color: rgb(195, 191, 188);
}

xap-dialog-layout-content,
xap-dialog-layout-actions {
  color: rgb(195, 191, 188);
}

.gvPageRoot .md-select-value {
  border-color: rgb(79, 74, 66);
}

.gvPageRoot .grey-900 {
  color: rgb(223, 222, 219);
}

.gvPageRoot .grey-800 {
  color: rgb(195, 191, 188);
}

.gvPageRoot md-content,
.gvPageRoot .grey-700 {
  color: rgb(160, 156, 151);
}

.gvPageRoot.gvHighContrast .grey-900 {
  color: rgb(255, 255, 255);
}

.gvPageRoot.gvHighContrast .grey-800 {
  color: rgb(223, 222, 219);
}

.gvPageRoot.gvHighContrast md-content,
.gvPageRoot.gvHighContrast .grey-700 {
  color: rgb(195, 191, 188);
}

.gvPageRoot .grey-200 {
  color: rgb(232, 234, 237);
}

.gvPageRoot .teal-800 {
  color: rgb(255, 150, 163);
}

.gvPageRoot .teal-50-background {
  background-image: initial;
  background-color: rgb(85, 36, 38);
}

.gmat-dialog-backdrop {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.6);
}

.gmat-dialog-panel .mat-dialog-container {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 3px 0px, rgba(60, 64, 67, 0.15) 0px 4px 8px 3px;
}

.mat-chip.gmat-chip {
  background-color: rgb(38, 38, 38);
  color: rgb(160, 156, 151);
  box-shadow: rgb(66, 60, 51) 0px 0px 0px 1px inset;
}

.mat-chip.gmat-chip:focus::after {
  background-color: rgba(95, 99, 104, 0.12);
}

.mat-chip.gmat-chip:focus:hover::after {
  background-color: rgba(95, 99, 104, 0.16);
}

.mat-chip.gmat-chip:hover::after {
  background-color: rgba(95, 99, 104, 0.04);
}

.mat-chip.gmat-chip.gmat-assistive-chip {
  color: rgb(195, 191, 188);
}

.mat-chip.gmat-chip.mat-chip-selected {
  background-color: rgb(85, 36, 38);
  color: rgb(255, 134, 148);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
}

.mat-chip.gmat-chip.mat-chip-selected:focus::after {
  background-color: rgba(0, 121, 107, 0.12);
}

.mat-chip.gmat-chip.mat-chip-selected:focus:hover::after {
  background-color: rgba(0, 121, 107, 0.16);
}

.mat-chip.gmat-chip.mat-chip-selected:hover::after {
  background-color: rgba(0, 121, 107, 0.04);
}

.mat-chip.gmat-chip.mat-chip-selected .mat-ripple-element {
  background-color: rgba(0, 121, 107, 0.08);
}

.mat-chip.gmat-chip.mat-chip-selected:focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
}

.mat-chip.gmat-chip.mat-chip-selected:active {
  box-shadow: rgba(0, 77, 64, 0.3) 0px 1px 2px 0px, rgba(0, 77, 64, 0.15) 0px 1px 3px 1px;
}

.mat-chip.gmat-chip.mat-chip-selected.gmat-protected-chip.mat-chip-selected:active {
  box-shadow: rgba(0, 77, 64, 0.3) 0px 1px 3px 0px, rgba(0, 77, 64, 0.15) 0px 4px 8px 3px;
}

.mat-chip.gmat-chip.mat-chip-selected.gmat-protected-chip.mat-chip-selected {
  box-shadow: rgba(0, 77, 64, 0.3) 0px 1px 2px 0px, rgba(0, 77, 64, 0.15) 0px 1px 3px 1px;
}

.mat-chip.gmat-chip:focus {
  box-shadow: rgb(66, 60, 51) 0px 0px 0px 1px inset;
}

.mat-chip.gmat-chip:active,
.mat-chip.gmat-chip.gmat-protected-chip {
  box-shadow: rgba(32, 33, 36, 0.3) 0px 1px 2px 0px, rgba(32, 33, 36, 0.15) 0px 1px 3px 1px;
}

.mat-chip.gmat-chip.gmat-protected-chip:active {
  box-shadow: rgba(32, 33, 36, 0.3) 0px 1px 3px 0px, rgba(32, 33, 36, 0.15) 0px 4px 8px 3px;
}

.mat-chip.gmat-chip.gmat-protected-chip.mat-chip-disabled:active,
.mat-chip.gmat-chip.gmat-protected-chip.mat-chip-disabled:hover,
.mat-chip.gmat-chip.gmat-protected-chip.mat-chip-disabled:focus,
.mat-chip.gmat-chip.gmat-protected-chip.mat-chip-disabled {
  box-shadow: rgba(32, 33, 36, 0.3) 0px 1px 2px 0px, rgba(32, 33, 36, 0.15) 0px 1px 3px 1px;
}

.mat-chip.gmat-chip .mat-ripple-element {
  background-color: rgba(95, 99, 104, 0.08);
}

.mat-chip.gmat-chip.mat-chip-disabled:active,
.mat-chip.gmat-chip.mat-chip-disabled:hover,
.mat-chip.gmat-chip.mat-chip-disabled:focus,
.mat-chip.gmat-chip.mat-chip-disabled {
  background-color: rgb(57, 49, 45);
  color: rgb(154, 160, 166);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
}

.mat-chip.gmat-chip .mat-chip-remove .mat-chip-remove:hover {
  color: rgb(160, 156, 151);
}

.gmat-nav-list .gmat-nav-list-item .mat-icon {
  color: rgb(160, 156, 151);
}

.gmat-nav-list .gmat-nav-list-item.gmat-list-item-active,
.gmat-nav-list .gmat-nav-list-item.gmat-list-item-active .mat-icon {
  color: rgb(255, 134, 148);
}

.gmat-nav-list .gmat-nav-list-item.gmat-list-item-active,
.gmat-nav-list .gmat-nav-list-item-ripple.gmat-list-item-active,
.gmat-nav-list .gmat-static-nav-list-item.gmat-list-item-active,
.gmat-nav-list .gmat-nav-list-item .mat-ripple-element,
.gmat-nav-list .gmat-nav-list-item-ripple .mat-ripple-element,
.gmat-nav-list .gmat-static-nav-list-item .mat-ripple-element {
  background-image: initial;
  background-color: rgb(85, 36, 38);
}

.gmat-nav-list .gmat-nav-list-item {
  color: rgb(160, 156, 151);
}

.gvHighContrast .gmat-nav-list .gmat-nav-list-item {
  color: rgb(195, 191, 188);
}

@-webkit-keyframes gb__a {
  0% {}
  50% {}
}

@keyframes gb__a {
  0% {}
  50% {}
}

a.gb_0 {
  border-color: initial;
  color: rgb(189, 122, 11);
}

a.gb_0:hover::after,
a.gb_0:focus::after {
  background-color: rgba(0, 0, 0, 0.12);
}

a.gb_0:active {
  background-color: rgba(140, 140, 140, 0.4);
}

a.gb_1 {
  background-color: rgb(66, 133, 244);
  color: rgb(255, 255, 255);
}

a.gb_1:active {
  background-color: rgb(0, 67, 178);
}

.gb_2 {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
}

.gb_3 {
  background-image: initial;
  background-color: rgb(45, 45, 45);
  border-color: rgb(95, 95, 95);
}

.gb_4 {
  background-image: initial;
  background-color: rgb(45, 45, 45);
}

.gb_3,
#gb a.gb_3.gb_3,
.gb_4 {
  color: rgb(153, 153, 153);
}

.gb_4 {
  border-color: rgb(66, 133, 244);
  background-image: -webkit-linear-gradient(top, rgb(252, 166, 14), rgb(70, 131, 234));
  background-color: initial;
}

#gb a.gb_4.gb_4 {
  color: rgb(255, 255, 255);
}

.gb_4:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px;
}

.gb_4:active {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 0px inset;
  background-image: -webkit-linear-gradient(top, rgb(60, 122, 228), rgb(63, 118, 211));
  background-color: initial;
}

.gb_D {
  color: rgb(255, 255, 255);
}

#gb#gb a.gb_D {
  color: rgb(255, 255, 255);
}

.gb_Za {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(38, 38, 38);
}

.gb_0a {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.2);
}

.gb_F {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.2);
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
}

.gb_qa .gb_4c:not(.gb_0):focus img {
  background-color: rgba(0, 0, 0, 0.2);
}

.gb_wc .gb_Ve.gb_We button:focus svg,
.gb_wc .gb_Ve.gb_We button:focus:hover svg,
.gb_Ve button:focus svg,
.gb_Ve button:focus:hover svg,
.gb_D:focus,
.gb_D:focus:hover {
  background-color: rgba(60, 64, 67, 0.1);
}

.gb_wc .gb_Ve.gb_We button:active svg,
.gb_Ve button:active svg,
.gb_D:active {
  background-color: rgba(60, 64, 67, 0.12);
}

.gb_wc .gb_Ve.gb_We button:hover svg,
.gb_Ve button:hover svg,
.gb_D:hover {
  background-color: rgba(60, 64, 67, 0.08);
}

.gb_ja .gb_D.gb_Na:hover {
  background-color: rgba(0, 0, 0, 0);
}

.gb_D[aria-expanded="true"],
.gb_D:hover[aria-expanded="true"] {
  background-color: rgba(95, 99, 104, 0.24);
}

.gb_wc .gb_Ve button:hover svg,
.gb_wc .gb_D:hover {
  background-color: rgba(66, 60, 51, 0.08);
}

.gb_wc .gb_Ve button:focus svg,
.gb_wc .gb_Ve button:focus:hover svg,
.gb_wc .gb_D:focus,
.gb_wc .gb_D:focus:hover {
  background-color: rgba(66, 60, 51, 0.1);
}

.gb_wc .gb_Ve button:active svg,
.gb_wc .gb_D:active {
  background-color: rgba(66, 60, 51, 0.12);
}

.gb_wc .gb_D[aria-expanded="true"],
.gb_wc .gb_D:hover[aria-expanded="true"] {
  background-color: rgba(38, 38, 38, 0.12);
}

@media (max-width: 350px) {}

.gb_Vc.gb_Wc {
  color: rgb(195, 191, 188);
}

.gb_qa {
  color: rgb(255, 255, 255);
  background-color: rgb(38, 38, 38) !important;
}

.gb_Md {
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
}

.gb_5d {
  color: rgb(255, 255, 255);
}

.gb_wc {
  color: rgb(255, 255, 255);
}

.gb_qa a,
.gb_Bc a {
  color: inherit;
}

.gb_t {
  color: rgba(255, 255, 255, 0.87);
}

.gb_qa svg,
.gb_Bc svg,
.gb_Xc .gb_6d,
.gb_Nc .gb_6d {
  color: rgb(160, 156, 151);
}

.gb_wc svg,
.gb_Bc.gb_Fc svg,
.gb_wc .gb_Xc .gb_6d,
.gb_wc .gb_Xc .gb_vc,
.gb_wc .gb_Xc .gb_0c,
.gb_Bc.gb_Fc .gb_6d {
  color: rgba(255, 255, 255, 0.87);
}

.gb_Wc {
  color: inherit;
}

a.gb_g,
span.gb_g {
  color: rgba(255, 255, 255, 0.87);
}

.gb_wc a.gb_g,
.gb_wc span.gb_g {
  color: rgb(255, 255, 255);
}

.gb_4.gb_ae:hover {
  background-image: initial;
  background-color: rgb(43, 125, 233);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_4.gb_ae:focus,
.gb_4.gb_ae:hover:focus {
  background-image: initial;
  background-color: rgb(232, 148, 37);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_4.gb_ae:active {
  background-image: initial;
  background-color: rgb(225, 137, 23);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_ae:not(.gb_3) {
  background-image: initial;
  background-color: rgb(26, 115, 232);
  border-color: rgba(0, 0, 0, 0);
}

#gb a.gb_ae.gb_3,
#gb .gb_wc a.gb_ae,
#gb.gb_wc a.gb_ae {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgb(79, 74, 66);
  box-shadow: none;
  color: rgb(229, 140, 23);
}

#gb a.gb_4.gb_ka.gb_ce.gb_ae {
  background-image: initial;
  background-color: rgb(189, 121, 11);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  color: rgb(223, 222, 219);
}

#gb a.gb_ae.gb_3:hover,
#gb .gb_wc a.gb_ae:hover,
#gb.gb_wc a.gb_ae:hover {
  background-image: initial;
  background-color: rgb(84, 48, 0);
  border-color: rgb(123, 75, 7);
}

#gb a.gb_4.gb_ka.gb_ce.gb_ae:hover {
  background-image: initial;
  background-color: rgb(181, 116, 10);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 1px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
}

#gb a.gb_ae.gb_3:focus,
#gb a.gb_ae.gb_3:focus:hover,
#gb .gb_wc a.gb_ae:focus,
#gb .gb_wc a.gb_ae:focus:hover,
#gb.gb_wc a.gb_ae:focus,
#gb.gb_wc a.gb_ae:focus:hover {
  background-image: initial;
  background-color: rgb(88, 56, 0);
  border-color: rgb(127, 80, 7);
}

#gb a.gb_4.gb_ka.gb_ce.gb_ae:focus,
#gb a.gb_4.gb_ka.gb_ce.gb_ae:focus:hover {
  background-image: initial;
  background-color: rgb(161, 103, 9);
  box-shadow: none;
}

#gb a.gb_ae.gb_3:active,
#gb .gb_wc a.gb_ae:active,
#gb.gb_wc a.gb_ae:active {
  background-image: initial;
  background-color: rgb(92, 58, 5);
}

#gb a.gb_4.gb_ka.gb_ce.gb_ae:active {
  background-image: initial;
  background-color: rgb(166, 106, 11);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

#gb a.gb_ae.gb_3:not(.gb_ka):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gb_ja {
  background-color: rgba(38, 38, 38, 0.88);
  border-color: rgb(79, 74, 66);
}

.gb_ja.gb_ka {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(95, 99, 104);
}

.gb_ja.gb_ka .gb_la {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gb_ja:hover {
  border-color: rgb(117, 73, 8);
  background-color: rgba(84, 60, 0, 0.88);
}

.gb_ja.gb_ka:hover {
  border-color: rgb(95, 99, 104);
  background-color: rgba(66, 60, 51, 0.08);
}

.gb_ja:focus {
  border-color: rgb(38, 38, 38);
  background-color: rgb(38, 38, 38);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.gb_ja.gb_ka:focus {
  border-color: rgb(66, 60, 51);
  background-color: rgb(56, 56, 59);
}

.gb_ja.gb_ka:active,
.gb_ja.gb_ma.gb_ka:focus {
  border-color: rgb(95, 99, 104);
  background-color: rgb(51, 52, 56);
}

.gb_na.gb_oa {
  background-color: rgb(57, 49, 45);
}

.gb_Da {
  border-color: initial;
}

.gb_Ea {
  background-color: rgb(96, 63, 4);
  border-color: rgba(32, 33, 36, 0.08);
}

.gb_Ea.gb_Da:hover,
.gb_Ea.gb_Da:active {
  box-shadow: none;
}

.gb_Fa {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: initial;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.gb_Ha {
  color: rgb(224, 142, 24);
}

@media (min-resolution: 1.25dppx),
not all,
(-webkit-min-device-pixel-ratio: 1.25),
not all {}

.gb_Da:hover,
.gb_Da:focus {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px;
}

.gb_Da:active {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 0px inset;
}

.gb_Da:active::after {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.1);
}

.gb_Ma {
  border-top-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}

.gb_Pa.gb_Ca {
  color: rgb(255, 255, 255);
}

#gb#gb.gb_j.gb_j a.gb_Ja,
#gb#gb .gb_j.gb_j a.gb_Ja {
  color: rgb(255, 255, 255);
}

.gb_j.gb_j .gb_Ma {
  border-top-color: rgb(38, 38, 38);
}

.gb_E .gb_Da:hover,
.gb_j .gb_Da:hover,
.gb_E .gb_Da:focus,
.gb_j .gb_Da:focus {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px;
}

.gb_tc {
  border-color: initial;
}

img.gb_uc {
  border-color: initial;
}

@media not all {}

@media not all {}

.gb_vc:focus,
.gb_vc:focus:hover {
  background-color: rgba(60, 64, 67, 0.1);
}

.gb_vc:active {
  background-color: rgba(60, 64, 67, 0.12);
}

.gb_vc:hover {
  background-color: rgba(60, 64, 67, 0.08);
}

.gb_wc .gb_vc:hover {
  background-color: rgba(66, 60, 51, 0.08);
}

.gb_wc .gb_vc:focus,
.gb_wc .gb_vc:focus:hover {
  background-color: rgba(66, 60, 51, 0.1);
}

.gb_wc .gb_vc:active {
  background-color: rgba(66, 60, 51, 0.12);
}

.gb_Bc {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.gb_Bc.gb_ma {
  box-shadow: rgba(0, 0, 0, 0.28) 0px 0px 16px;
}

.gb_Bc.gb_Fc {
  background-color: rgb(32, 33, 36);
  color: rgb(232, 234, 237);
}

.gb_Hc.gb_Ic {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 0px;
}

.gb_Mc:not(:last-child) {
  border-bottom-color: rgb(72, 72, 72);
}

.gb_Fc .gb_Mc:not(:last-child) {
  border-bottom-color: rgb(95, 99, 104);
}

.gb_Fc .gb_Nc .gb_Oc {
  background-color: rgb(32, 33, 36);
  border-bottom-color: rgb(95, 99, 104);
}

.gb_Pc,
.gb_Qc {
  color: rgba(255, 255, 255, 0.87);
}

.gb_Fc .gb_Pc {
  color: rgb(232, 234, 237);
}

.gb_Fc .gb_Qc {
  color: rgb(154, 160, 166);
}

.gb_Pc:hover {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
}

.gb_Fc .gb_Pc:hover {
  background-image: initial;
  background-color: rgba(66, 60, 51, 0.08);
}

.gb_Pc.gb_za {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(255, 255, 255, 0.87);
}

.gb_Fc .gb_Pc.gb_za {
  background-image: initial;
  background-color: rgba(66, 60, 51, 0.12);
  color: rgba(255, 255, 255, 0.87);
}

.gb_Nc .gb_Oc {
  background-color: rgb(48, 48, 48);
}

.gb_zf {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.24) 1px 1px 3px inset;
}

.gb_yf[aria-pressed="true"] .gb_zf {
  background-color: rgba(38, 38, 38, 0.1);
}

.gb_Af {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
  background-color: rgb(38, 38, 38);
}

.gb_De {
  color: rgb(255, 255, 255);
}

.gb_Ee {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}

.gb_Ve {
  background-image: initial;
  background-color: rgb(57, 49, 45);
  border-color: rgba(0, 0, 0, 0);
}

.gb_wc .gb_Ve {
  background-image: initial;
  background-color: rgba(57, 49, 45, 0.24);
}

.gb_Ve button {
  background-image: none;
  background-color: initial;
  border-color: initial;
}

.gb_gf {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  border-color: initial;
}

.gb_wc .gb_gf {
  color: rgba(255, 255, 255, 0.87);
}

.gb_Ve:not(.gb_We) input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

.gb_wc .gb_Ve:not(.gb_We) input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.87);
}

.gb_Ve.gb_He:not(.gb_N) {
  background-image: initial;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}

.gb_Se {
  background-image: initial;
  background-color: rgba(60, 64, 67, 0.9);
  color: rgb(255, 255, 255);
}

.gb_a-a {
  border-color: initial;
}

.gb_a.gb_b-b-c {
  background-color: rgb(38, 38, 38);
}

.gb_a.gb_b-b {
  background-color: rgb(38, 38, 38);
  border-color: rgb(121, 121, 121);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_l.gb_1a.gb_4a {
  background-color: rgb(45, 46, 48);
}

.gb_5a.gb_6a {
  color: rgb(160, 156, 151);
}

.gb_7a.gb_5a.gb_6a {
  background-color: rgba(189, 121, 11, 0.24);
  color: rgb(232, 234, 237);
}

.gb_8a,
#gb a.gb_8a.gb_8a,
.gb_9a a,
#gb .gb_9a.gb_9a a {
  color: rgb(204, 153, 51);
}

.gb_5a>.gb_8a,
#gb .gb_5a>a.gb_8a.gb_8a {
  color: rgb(255, 143, 0);
}

.gb_7a.gb_5a>.gb_8a,
#gb .gb_7a.gb_5a>a.gb_8a.gb_8a {
  color: rgb(138, 180, 248);
}

.gb_Ia {
  border-color: initial;
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_l .gb_jb {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.gb_l.gb_4a .gb_jb {
  background-image: initial;
  background-color: rgb(45, 46, 48);
}

.gb_kb {
  box-shadow: rgba(65, 69, 73, 0.3) 0px 1px 1px 0px, rgba(65, 69, 73, 0.15) 0px 1px 3px 1px;
}

.gb_kb:hover {
  background-color: rgb(84, 60, 0);
}

.gb_kb:focus,
.gb_kb:hover:focus {
  background-color: rgb(88, 56, 0);
}

.gb_kb:active,
.gb_kb:focus:active {
  background-color: rgb(88, 56, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 3px 0px, rgba(60, 64, 67, 0.15) 0px 4px 8px 3px;
}

.gb_l .gb_mb {
  color: rgb(223, 222, 219);
}

.gb_l.gb_4a .gb_mb {
  color: rgb(232, 234, 237);
}

.gb_ob {
  color: rgb(153, 153, 153);
}

.gb_l .gb_ob {
  color: rgb(160, 156, 151);
}

.gb_l.gb_4a .gb_ob {
  color: rgb(232, 234, 237);
}

.gb_eb>.gb_ob {
  color: rgb(255, 255, 255);
}

.gb_pb {
  color: rgb(153, 153, 153);
}

.gb_qb {
  color: rgb(160, 156, 151);
}

.gb_4a .gb_qb {
  color: rgb(154, 160, 166);
}

.gb_sb.gb_sb {
  background-color: rgb(38, 38, 38);
  border-color: rgb(79, 74, 66);
  color: rgb(195, 191, 188);
}

.gb_4a .gb_sb.gb_sb {
  background-color: rgb(45, 46, 48);
  border-color: rgb(95, 99, 104);
  color: rgb(232, 234, 237);
}

.gb_sb:hover {
  background-color: rgb(49, 43, 43);
}

.gb_sb:focus,
.gb_sb:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_sb:active,
.gb_sb:focus:active {
  background-color: rgb(62, 62, 59);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gb_tb {
  color: rgb(160, 156, 151);
}

.gb_4a .gb_tb {
  color: rgb(232, 234, 237);
}

.gb_ub.gb_ub {
  color: rgb(160, 156, 151);
}

.gb_4a .gb_ub.gb_ub {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(232, 234, 237);
}

.gb_ub:hover {
  background-color: rgb(49, 43, 43);
}

.gb_ub:focus,
.gb_ub:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_ub:active,
.gb_ub:active:focus {
  background-color: rgb(62, 62, 59);
}

.gb_cb .gb_3 {
  background-image: initial;
  background-color: rgb(254, 158, 2);
  border-color: rgb(48, 121, 237);
  color: rgb(255, 255, 255);
}

#gb .gb_cb a.gb_3.gb_3 {
  color: rgb(255, 255, 255);
}

.gb_cb .gb_3:hover {
  background-image: initial;
  background-color: rgb(53, 122, 232);
  border-color: rgb(47, 91, 183);
}

.gb_vb .gb_Za {
  border-bottom-color: rgb(3, 18, 111);
}

.gb_6a {
  background-image: initial;
  background-color: rgb(3, 18, 111);
}

.gb_5a.gb_6a {
  background-image: initial;
  background-color: rgb(96, 63, 4);
}

.gb_wb.gb_wb {
  background-color: rgb(38, 38, 38);
  color: rgb(195, 191, 188);
}

.gb_4a .gb_wb.gb_wb {
  background-color: rgb(45, 46, 48);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(232, 234, 237);
}

.gb_wb:hover {
  background-color: rgb(49, 43, 43);
}

.gb_wb:focus,
.gb_wb:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_wb:active,
.gb_wb:focus:active {
  background-color: rgb(62, 62, 59);
}

.gb_xb {
  border-color: initial;
}

.gb_kb>svg.gb_lb,
.gb_xb>svg.gb_yb,
.gb_zb>svg.gb_Ab {
  color: rgb(160, 156, 151);
}

.gb_4a .gb_kb {
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px, rgba(0, 0, 0, 0.15) 0px 4px 8px 3px;
}

.gb_4a .gb_kb>svg.gb_lb,
.gb_4a .gb_xb>svg.gb_yb {
  color: rgb(232, 234, 237);
}

.gb_4a .gb_kb:hover {
  background-color: rgb(53, 54, 57);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 3px 0px, rgba(0, 0, 0, 0.15) 0px 6px 10px 4px;
}

.gb_4a .gb_kb:focus,
.gb_4a .gb_kb:focus:hover {
  background-color: rgb(53, 54, 57);
  border-color: rgb(95, 99, 104);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 3px 0px, rgba(0, 0, 0, 0.15) 0px 6px 10px 4px;
}

.gb_4a .gb_kb:active {
  background-color: rgba(38, 38, 38, 0.12);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 4px 0px, rgba(0, 0, 0, 0.15) 0px 8px 12px 6px;
}

.gb_Cb {
  border-bottom-color: rgb(66, 60, 51);
  border-top-color: rgb(66, 60, 51);
}

.gb_4a .gb_Cb {
  border-bottom-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
}

.gb_Db.gb_Db,
.gb_Eb.gb_Eb {
  background-color: rgb(38, 38, 38);
  border-color: rgb(79, 74, 66);
}

.gb_Db.gb_Db {
  color: rgb(195, 191, 188);
}

.gb_Eb.gb_Eb {
  color: rgb(229, 140, 23);
}

.gb_4a .gb_Eb.gb_Eb,
.gb_4a .gb_Db.gb_Db {
  background-color: rgb(45, 46, 48);
  border-color: rgb(95, 99, 104);
  color: rgb(232, 234, 237);
}

.gb_Db:hover {
  background-color: rgb(49, 43, 43);
}

.gb_Db:focus,
.gb_Db:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_Db:active,
.gb_Db:active:focus {
  background-color: rgb(62, 62, 59);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gb_Eb:hover {
  background-color: rgb(84, 48, 0);
  border-color: rgb(123, 75, 7);
}

.gb_Eb:focus,
.gb_Eb:hover:focus {
  background-color: rgb(88, 56, 0);
  border-color: rgb(127, 80, 7);
}

.gb_Eb:active,
.gb_Eb:active:focus {
  background-color: rgb(92, 58, 5);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gb_Jb {
  border-top-color: rgb(66, 60, 51);
}

.gb_4a .gb_Jb {
  border-top-color: rgb(95, 99, 104);
}

.gb_Mb {
  border-top-color: rgba(0, 0, 0, 0.2);
}

.gb_Nb>.gb_Mb {
  border-color: initial;
}

.gb_Mb:hover {
  background-image: initial;
  background-color: rgb(55, 55, 55);
}

.gb_Nb>.gb_Mb:hover {
  background-color: rgb(49, 43, 43);
}

.gb_Nb>.gb_Mb:focus,
.gb_Nb>.gb_Mb:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_Nb>.gb_Mb:active,
.gb_Nb>.gb_Mb:focus:active {
  background-color: rgb(62, 62, 59);
}

.gb_4a .gb_Qb:hover,
.gb_4a .gb_wb:hover,
.gb_4a .gb_ub:hover,
.gb_4a .gb_Nb>.gb_Mb:hover {
  background-color: rgba(38, 38, 38, 0.04);
  border-color: rgba(0, 0, 0, 0);
}

.gb_4a .gb_Db:hover,
.gb_4a .gb_sb:hover {
  background-color: rgba(66, 60, 51, 0.04);
  border-color: rgb(95, 99, 104);
}

.gb_4a .gb_Qb:focus,
.gb_4a .gb_Qb:hover:focus,
.gb_4a .gb_sb:focus,
.gb_4a .gb_sb:hover:focus,
.gb_4a .gb_wb:focus,
.gb_4a .gb_wb:hover:focus,
.gb_4a .gb_Db:focus,
.gb_4a .gb_Db:hover:focus,
.gb_4a .gb_Nb>.gb_Mb:focus,
.gb_4a .gb_Nb>.gb_Mb:hover:focus {
  background-color: rgba(66, 60, 51, 0.12);
  border-color: rgb(66, 60, 51);
}

.gb_4a .gb_ub:focus,
.gb_4a .gb_ub:hover:focus {
  background-color: rgba(66, 60, 51, 0.12);
}

.gb_4a .gb_Qb:active,
.gb_4a .gb_Qb:focus:active,
.gb_4a .gb_wb:active,
.gb_4a .gb_wb:focus:active,
.gb_4a .gb_ub:active,
.gb_4a .gb_ub:active:focus,
.gb_4a .gb_Nb>.gb_Mb:active,
.gb_4a .gb_Nb>.gb_Mb:focus:active {
  background-color: rgba(66, 60, 51, 0.1);
  border-color: rgba(0, 0, 0, 0);
}

.gb_4a .gb_Nb>.gb_Mb {
  border-color: rgba(0, 0, 0, 0);
}

.gb_4a .gb_Db:active,
.gb_4a .gb_Db:active:focus,
.gb_4a .gb_sb:active,
.gb_4a .gb_sb:focus:active {
  background-color: rgba(66, 60, 51, 0.1);
  border-color: rgb(95, 99, 104);
}

.gb_Nb>.gb_Mb[selected="true"] {
  background-color: rgba(60, 64, 67, 0.1);
}

.gb_4a .gb_Nb>.gb_Mb[selected="true"] {
  background-color: rgba(38, 38, 38, 0.12);
}

.gb_Sb {
  background-color: rgba(0, 0, 0, 0);
  border-color: initial;
  color: rgb(255, 255, 255);
}

.gb_Tb.gb_Ub {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

.gb_4a .gb_Tb.gb_Ub {
  background-color: rgb(189, 121, 11);
  color: rgb(210, 209, 207);
}

.gb_Tb.gb_Vb {
  background-color: rgb(38, 38, 38);
  border-color: rgb(79, 74, 66);
  color: rgb(195, 191, 188);
}

.gb_4a .gb_Tb.gb_Vb {
  background-color: rgba(79, 74, 66, 0.01);
  border-color: rgb(95, 99, 104);
  color: rgb(232, 234, 237);
}

.gb_Sb.gb_Vb:hover {
  background-color: rgb(49, 43, 43);
}

.gb_Sb.gb_Vb:focus,
.gb_Sb.gb_Vb:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_Sb.gb_Vb:active {
  background-color: rgb(49, 49, 49);
  border-color: rgb(95, 99, 104);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.gb_Sb.gb_Ub:hover {
  background-color: rgb(43, 125, 233);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_Sb.gb_Ub:focus,
.gb_Sb.gb_Ub:hover:focus {
  background-color: rgb(232, 148, 37);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_Sb.gb_Ub:active {
  background-color: rgb(225, 137, 23);
  box-shadow: rgba(66, 133, 244, 0.3) 0px 1px 2px 0px, rgba(66, 133, 244, 0.15) 0px 1px 3px 1px;
}

.gb_4a .gb_Sb.gb_Vb:hover {
  background-color: rgba(66, 60, 51, 0.04);
}

.gb_4a .gb_Sb.gb_Vb:focus,
.gb_4a .gb_Sb.gb_Vb:hover:focus {
  background-color: rgba(66, 60, 51, 0.12);
  border-color: rgb(66, 60, 51);
}

.gb_4a .gb_Sb.gb_Vb:active,
.gb_4a .gb_Sb.gb_Vb:active:focus {
  background-color: rgba(66, 60, 51, 0.1);
  border-color: rgb(95, 99, 104);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.gb_4a .gb_Sb.gb_Ub:hover {
  background-color: rgb(180, 116, 12);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
}

.gb_4a .gb_Sb.gb_Ub:focus,
.gb_4a .gb_Sb.gb_Ub:hover:focus {
  background-color: rgb(162, 104, 11);
}

.gb_4a .gb_Sb.gb_Ub:active {
  background-color: rgb(189, 121, 11);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 2px;
}

.gb_Mb[selected="true"]>.gb_Sb:focus {
  background-color: rgba(0, 0, 0, 0.24);
}

.gb_Mb[selected="true"]>.gb_Sb:hover,
.gb_Mb[selected="true"]>.gb_Sb:focus:hover {
  background-color: rgb(86, 86, 86);
}

.gb_Mb[selected="true"]>.gb_Sb:active {
  background-color: rgb(33, 33, 33);
}

.gb_Mb:first-child,
.gb_Wb:first-child+.gb_Mb {
  border-top-color: initial;
}

.gb_4a .gb_Mb:first-child,
.gb_4a .gb_Wb:first-child+.gb_Mb {
  border-top-color: rgba(0, 0, 0, 0);
}

.gb_4a .gb_Mb:first-child:focus:hover,
.gb_4a .gb_Wb:first-child+.gb_Mb:focus:hover,
.gb_4a .gb_Mb:first-child:focus,
.gb_4a .gb_Wb:first-child+.gb_Mb:focus {
  border-top-color: rgb(66, 60, 51);
}

.gb_4a .gb_Mb:first-child:active,
.gb_4a .gb_Wb:first-child+.gb_Mb:active,
.gb_4a .gb_Mb:first-child:active:focus,
.gb_4a .gb_Wb:first-child+.gb_Mb:active:focus {
  border-top-color: rgba(0, 0, 0, 0);
}

.gb_Nb>.gb_Mb.gb_Xb:hover,
.gb_Nb>.gb_Mb.gb_Xb:focus,
.gb_Nb>.gb_Mb.gb_Xb:active {
  background-color: rgb(38, 38, 38);
}

.gb_Zb {
  border-color: initial;
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_1b {
  color: rgb(195, 191, 188);
}

.gb_4a .gb_1b {
  color: rgb(232, 234, 237);
}

.gb_4a .gb_3b {
  color: rgb(189, 193, 198);
}

.gb_3b {
  color: rgb(160, 156, 151);
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_5b {
  color: rgb(162, 156, 150);
}

.gb_4a .gb_5b {
  color: rgb(154, 160, 166);
}

.gb_6b {
  background-color: rgba(0, 0, 0, 0);
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_Sb:hover {
  background-color: rgba(100, 100, 100, 0.4);
}

.gb_Qb:hover {
  background-color: rgb(49, 43, 43);
}

.gb_Qb:focus,
.gb_Qb:hover:focus {
  background-color: rgb(49, 49, 49);
}

.gb_Qb:active,
.gb_Qb:focus:active {
  background-color: rgb(62, 62, 59);
}

.gb_ac {
  color: rgb(189, 128, 18);
}

.gb_bc {
  color: rgb(195, 191, 188);
}

@media screen and (min-width: 361px) {}

@media screen and (max-width: 361px) {}

.gb_4a .gb_bc {
  color: rgb(232, 234, 237);
}

@-webkit-keyframes progressmove {
  0% {}
  100% {}
}

@keyframes progressmove {
  0% {}
  100% {}
}

.gb_gc {
  background-color: rgb(117, 73, 8);
}

.gb_4a .gb_gc {
  background-color: rgba(189, 121, 11, 0.24);
}

.gb_hc {
  background-color: rgb(26, 115, 232);
}

.gb_4a>.gb_hc {
  background-color: rgb(189, 121, 11);
}

.gb_mc {
  color: rgb(160, 156, 151);
}

.gb_1a.gb_l::-webkit-scrollbar-thumb {
  background-image: initial;
  background-color: rgb(79, 74, 66);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}

.gb_H.gb_l::-webkit-scrollbar-thumb {
  background-image: initial;
  background-color: rgb(79, 74, 66);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}

.gb_4a.gb_l::-webkit-scrollbar-thumb {
  background-color: rgb(95, 99, 104);
}

.gb_H.gb_l::-webkit-scrollbar-track {
  background-image: none;
  background-color: initial;
  border-color: initial;
}

.gb_1a.gb_l::-webkit-scrollbar-track {
  background-image: none;
  background-color: initial;
  border-color: initial;
}

.gb_H.gb_l::-webkit-scrollbar-track:hover {
  background-image: none;
  background-color: initial;
  border-color: initial;
}

.gb_1a.gb_l::-webkit-scrollbar-track:hover {
  background-image: none;
  background-color: initial;
  border-color: initial;
}

.gb_ge>* {
  color: rgb(189, 193, 198);
}

.gb_ge div:first-child {
  color: rgb(255, 255, 255);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-track {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-track:hover {
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-track:horizontal:hover {
  box-shadow: none;
}

.gb_Ic .gb_Dc::-webkit-scrollbar-track:vertical {
  border-left-color: rgba(0, 0, 0, 0);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-track:horizontal {
  border-top-color: rgba(0, 0, 0, 0);
}

.gb_Ic .gb_Dc::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}

.gb_Ic .gb_Dc:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 0px inset, rgba(0, 0, 0, 0.067) 0px -1px 0px inset;
}

.gb_Ic .gb_Dc::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0px inset, rgba(0, 0, 0, 0.133) 0px -1px 0px inset;
}

.gb_Ic .gb_Dc::-webkit-scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 0px inset, rgba(0, 0, 0, 0.165) 0px -1px 0px inset;
}

.gb_Ve.gb_We {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(65, 69, 73, 0.3) 0px 1px 1px 0px, rgba(65, 69, 73, 0.15) 0px 1px 3px 1px;
}

.gb_Ve.gb_We .gb_gf {
  color: rgb(255, 255, 255);
}

.gb_Ve.gb_We input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.54);
}

.gb_Ve.gb_We button svg {
  color: rgb(160, 156, 151);
}

.gb_hf {
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-right-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-top-color: initial;
  box-shadow: rgba(65, 69, 73, 0.3) 0px 1px 1px 0px, rgba(65, 69, 73, 0.15) 0px 1px 3px 1px;
}

.gb_jf {
  color: rgb(153, 153, 153);
}

.gb_kf {
  background-color: rgb(48, 48, 48);
}

.b3-page-overlay,
.b3-element-overlay {
  background-image: linear-gradient(0deg, rgb(38, 38, 38), rgba(38, 38, 38, 0.9));
  background-color: initial;
}

.b3-quantum-spinner-message {
  color: rgb(240, 98, 167);
}

.b3-quantum-spinner {
  background-image: url("//www.gstatic.com/billing-ui/images/activityindicator/quantum_spinner_multicolored_87px_ae39165462d434417c9d93122bc4315c.gif");
  background-color: initial;
  filter: invert(1);
}

.jfk-activityIndicator-icon {
  background-image: url("//ssl.gstatic.com/ui/v1/activityindicator/offline.png");
  background-color: initial;
  filter: invert(1);
}

.jfk-activityIndicator-small .jfk-activityIndicator-icon {
  background-image: url("//ssl.gstatic.com/ui/v1/activityindicator/offline_16.png");
  background-color: initial;
  filter: invert(1);
}

.b3-modal-dialog.modal-dialog {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;
  background-image: initial;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.333);
}

.b3-modal-dialog.modal-dialog-bg {
  background-image: initial;
  background-color: rgb(38, 38, 38);
}

.b3-modal-dialog.modal-dialog {
  color: rgb(255, 255, 255);
}

.b3-modal-dialog .modal-dialog-title {
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
}

.b3-modal-dialog .modal-dialog-title-close::after {
  background-image: url("//ssl.gstatic.com/ui/v1/dialog/close-x.png");
  background-color: initial;
  filter: invert(1);
}

.b3-modal-dialog .modal-dialog-content {
  background-color: rgb(38, 38, 38);
}

.b3-modal-dialog .modal-dialog-buttons button {
  background-color: rgb(48, 48, 48);
  background-image: -webkit-linear-gradient(top, rgb(48, 48, 48), rgb(52, 52, 52));
  border-color: rgba(0, 0, 0, 0.1);
  color: rgb(187, 187, 187);
}

.b3-modal-dialog .modal-dialog-buttons button:hover,
.b3-modal-dialog .modal-dialog-buttons button:active {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  background-color: rgb(45, 45, 45);
  background-image: -webkit-linear-gradient(top, rgb(45, 45, 45), rgb(52, 52, 52));
  border-color: rgb(95, 95, 95);
  color: rgb(204, 204, 204);
}

.b3-modal-dialog .modal-dialog-buttons button:active {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px inset;
}

.b3-modal-dialog .modal-dialog-buttons button:focus {
  border-color: rgb(254, 158, 2);
}

.b3-modal-dialog .modal-dialog-buttons button[disabled] {
  box-shadow: none;
  background-image: none;
  background-color: rgb(38, 38, 38);
  border-color: rgba(0, 0, 0, 0.05);
  color: rgb(184, 184, 184);
}

.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action {
  background-color: rgb(254, 158, 2);
  background-image: -webkit-linear-gradient(top, rgb(254, 158, 2), rgb(71, 135, 237));
  border-color: rgb(48, 121, 237);
  color: rgb(255, 255, 255);
}

.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action:hover,
.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action:active {
  background-color: rgb(53, 122, 232);
  background-image: -webkit-linear-gradient(top, rgb(254, 158, 2), rgb(53, 122, 232));
  border-color: rgb(47, 91, 183);
  color: rgb(255, 255, 255);
}

.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action:active {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px inset;
}

.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action:focus {
  box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset;
  border-color: rgba(0, 0, 0, 0);
}

.b3-modal-dialog .modal-dialog-buttons .goog-buttonset-action[disabled] {
  box-shadow: none;
  background-image: initial;
  background-color: rgb(254, 158, 2);
  color: rgb(255, 255, 255);
}

.hidden-host-html {
  background-color: rgba(0, 0, 0, 0.7);
}

.b3-modal-dialog-quantum.b3-modal-dialog.modal-dialog {
  border-color: initial;
}

.b3-modal-dialog-quantum.b3-modal-dialog .modal-dialog-title-close {
  background-image: none;
  background-color: initial;
}

.b3-modal-dialog-quantum.b3-modal-dialog .modal-dialog-title-close::after {
  background-image: none;
  background-color: initial;
}

@media screen and (max-device-width: 396px) {}

.b3-modal-dialog-quantum.b3-modal-dialog.modal-dialog-bg {
  background-image: initial;
  background-color: rgb(0, 0, 0);
}

.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2],
.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] {
  color: rgb(255, 134, 148);
}

.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-ripple,
.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-ripple {
  color: rgb(255, 134, 148);
}

.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay,
.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2],
.gvHighContrast.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] {
  color: rgb(255, 134, 148);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-ripple,
.gvHighContrast.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-ripple {
  color: rgb(255, 134, 148);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay,
.gvHighContrast.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2],
.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-ripple,
.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-ripple {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay,
.gvCompanionRoot.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay {
  background-color: rgb(0, 121, 107);
}

.gvMeet.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2],
.gvMeet.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] {
  color: rgb(229, 140, 23);
}

.gvMeet.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-ripple,
.gvMeet.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-ripple {
  color: rgb(229, 140, 23);
}

.gvMeet.gvPageRoot [_nghost-dnk-c2] a.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay,
.gvMeet.gvPageRoot [_nghost-dnk-c2] button.activated[_ngcontent-dnk-c2] .mat-button-focus-overlay {
  background-color: rgb(26, 115, 232);
}

.root[_ngcontent-dnk-c6]:not(.expanded) .navItemBadge[_ngcontent-dnk-c6] {
  color: rgb(255, 255, 255);
}

.gvPageRoot [_nghost-dnk-c6] .unread[_ngcontent-dnk-c6] .navItemLabel[_ngcontent-dnk-c6] {
  color: rgb(223, 222, 219);
}

.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6] .gmat-nav-list-item.gmat-list-item-active .mat-icon svg {
  color: rgb(255, 134, 148);
}

.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6]:not(.expanded) .navItemBadge[_ngcontent-dnk-c6] {
  background-color: rgb(0, 121, 107);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c6] .unread[_ngcontent-dnk-c6] .navItemLabel[_ngcontent-dnk-c6] {
  color: rgb(223, 222, 219);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6] .gmat-nav-list-item.gmat-list-item-active .mat-icon svg {
  color: rgb(255, 134, 148);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6]:not(.expanded) .navItemBadge[_ngcontent-dnk-c6] {
  background-color: rgb(0, 121, 107);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c6] .unread[_ngcontent-dnk-c6] .navItemLabel[_ngcontent-dnk-c6] {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6] .gmat-nav-list-item.gmat-list-item-active .mat-icon svg {
  color: rgb(255, 134, 148);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6]:not(.expanded) .navItemBadge[_ngcontent-dnk-c6] {
  background-color: rgb(0, 121, 107);
}

.gvMeet.gvPageRoot [_nghost-dnk-c6] .unread[_ngcontent-dnk-c6] .navItemLabel[_ngcontent-dnk-c6] {
  color: rgb(223, 222, 219);
}

.gvMeet.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6] .gmat-nav-list-item.gmat-list-item-active .mat-icon svg {
  color: rgb(230, 152, 45);
}

.gvMeet.gvPageRoot [_nghost-dnk-c6] .root[_ngcontent-dnk-c6]:not(.expanded) .navItemBadge[_ngcontent-dnk-c6] {
  background-color: rgb(25, 103, 210);
}

.gv-inbox-summary .status:focus {
  background-image: none;
  background-color: initial;
}

.gvPageRoot .gv-inbox-summary .greeting,
.gvPageRoot .gv-inbox-summary .numberless-subhead {
  color: rgb(223, 222, 219);
}

.gvPageRoot .gv-inbox-summary .numberless-status,
.gvPageRoot .gv-inbox-summary .status {
  color: rgb(160, 156, 151);
}

.gvHighContrast.gvPageRoot .gv-inbox-summary .greeting,
.gvHighContrast.gvPageRoot .gv-inbox-summary .numberless-subhead {
  color: rgb(255, 255, 255);
}

.gvHighContrast.gvPageRoot .gv-inbox-summary .numberless-status,
.gvHighContrast.gvPageRoot .gv-inbox-summary .status {
  color: rgb(195, 191, 188);
}

.gvCompanionRoot.gvPageRoot .gv-inbox-summary .greeting,
.gvCompanionRoot.gvPageRoot .gv-inbox-summary .numberless-subhead {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot.gvPageRoot .gv-inbox-summary .numberless-status,
.gvCompanionRoot.gvPageRoot .gv-inbox-summary .status {
  color: rgb(160, 156, 151);
}

.gvMeet.gvPageRoot .gv-inbox-summary .greeting,
.gvMeet.gvPageRoot .gv-inbox-summary .numberless-subhead {
  color: rgb(223, 222, 219);
}

.gvMeet.gvPageRoot .gv-inbox-summary .numberless-status,
.gvMeet.gvPageRoot .gv-inbox-summary .status {
  color: rgb(160, 156, 151);
}

.mat-divider.mat-divider-vertical {
  border-top-color: initial;
}

.gvPageRoot [_nghost-dnk-c11] .gsuiteText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvPageRoot [_nghost-dnk-c11] .consumerText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c11] .gsuiteText[_ngcontent-dnk-c11] {
  color: rgb(195, 191, 188);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c11] .consumerText[_ngcontent-dnk-c11] {
  color: rgb(195, 191, 188);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c11] .gsuiteText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c11] .consumerText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvMeet.gvPageRoot [_nghost-dnk-c11] .gsuiteText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvMeet.gvPageRoot [_nghost-dnk-c11] .consumerText[_ngcontent-dnk-c11] {
  color: rgb(160, 156, 151);
}

.gvPageRoot [_nghost-dnk-c13] .icon[_ngcontent-dnk-c13] {
  color: rgb(229, 140, 23);
}

.gvPageRoot [_nghost-dnk-c13] .root[_ngcontent-dnk-c13] {
  color: rgb(160, 156, 151);
  background-color: rgb(38, 38, 38);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c13] .icon[_ngcontent-dnk-c13] {
  color: rgb(229, 140, 23);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c13] .root[_ngcontent-dnk-c13] {
  color: rgb(195, 191, 188);
  background-color: rgb(38, 38, 38);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c13] .icon[_ngcontent-dnk-c13] {
  color: rgb(229, 140, 23);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c13] .root[_ngcontent-dnk-c13] {
  color: rgb(160, 156, 151);
  background-color: rgb(38, 38, 38);
}

.gvMeet.gvPageRoot [_nghost-dnk-c13] .icon[_ngcontent-dnk-c13] {
  color: rgb(229, 140, 23);
}

.gvMeet.gvPageRoot [_nghost-dnk-c13] .root[_ngcontent-dnk-c13] {
  color: rgb(160, 156, 151);
  background-color: rgb(38, 38, 38);
}

@media (hover: none) {}

.mat-button,
.mat-icon-button,
.mat-stroked-button,
.mat-flat-button {
  border-color: initial;
}

.mat-raised-button {
  border-color: initial;
}

.mat-stroked-button {
  border-color: currentcolor;
}

.mat-fab {
  border-color: initial;
}

.mat-mini-fab {
  border-color: initial;
}

.select-arrow[_ngcontent-dnk-c12] {
  border-top-color: initial;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}

.gvPageRoot [_nghost-dnk-c12] .call-as-label[_ngcontent-dnk-c12] {
  color: rgb(160, 156, 151);
}

.gvPageRoot [_nghost-dnk-c12] .phone-number[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvPageRoot [_nghost-dnk-c12] .phone-number-name[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvPageRoot [_nghost-dnk-c12] .disable-anonymous-button[_ngcontent-dnk-c12] {
  background-image: none;
  background-color: initial;
  border-color: initial;
  color: rgb(229, 140, 23);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c12] .call-as-label[_ngcontent-dnk-c12] {
  color: rgb(195, 191, 188);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c12] .phone-number[_ngcontent-dnk-c12] {
  color: rgb(255, 255, 255);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c12] .phone-number-name[_ngcontent-dnk-c12] {
  color: rgb(255, 255, 255);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c12] .disable-anonymous-button[_ngcontent-dnk-c12] {
  background-image: none;
  background-color: initial;
  border-color: initial;
  color: rgb(229, 140, 23);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c12] .call-as-label[_ngcontent-dnk-c12] {
  color: rgb(160, 156, 151);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c12] .phone-number[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c12] .phone-number-name[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c12] .disable-anonymous-button[_ngcontent-dnk-c12] {
  background-image: none;
  background-color: initial;
  border-color: initial;
  color: rgb(229, 140, 23);
}

.gvMeet.gvPageRoot [_nghost-dnk-c12] .call-as-label[_ngcontent-dnk-c12] {
  color: rgb(160, 156, 151);
}

.gvMeet.gvPageRoot [_nghost-dnk-c12] .phone-number[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvMeet.gvPageRoot [_nghost-dnk-c12] .phone-number-name[_ngcontent-dnk-c12] {
  color: rgb(223, 222, 219);
}

.gvMeet.gvPageRoot [_nghost-dnk-c12] .disable-anonymous-button[_ngcontent-dnk-c12] {
  background-image: none;
  background-color: initial;
  border-color: initial;
  color: rgb(229, 140, 23);
}

.mat-menu-item {
  border-color: initial;
}

.mat-menu-item-submenu-trigger::after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) currentcolor;
}

.gvPageRoot [_nghost-dnk-c15] .phone-number-name[_ngcontent-dnk-c15] {
  color: rgb(223, 222, 219);
}

.gvPageRoot [_nghost-dnk-c15] .phone-number[_ngcontent-dnk-c15] {
  color: rgb(160, 156, 151);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c15] .phone-number-name[_ngcontent-dnk-c15] {
  color: rgb(255, 255, 255);
}

.gvHighContrast.gvPageRoot [_nghost-dnk-c15] .phone-number[_ngcontent-dnk-c15] {
  color: rgb(195, 191, 188);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c15] .phone-number-name[_ngcontent-dnk-c15] {
  color: rgb(223, 222, 219);
}

.gvCompanionRoot.gvPageRoot [_nghost-dnk-c15] .phone-number[_ngcontent-dnk-c15] {
  color: rgb(160, 156, 151);
}

.gvMeet.gvPageRoot [_nghost-dnk-c15] .phone-number-name[_ngcontent-dnk-c15] {
  color: rgb(223, 222, 219);
}

.gvMeet.gvPageRoot [_nghost-dnk-c15] .phone-number[_ngcontent-dnk-c15] {
  color: rgb(160, 156, 151);
}

.mat-nav-list a {
  color: inherit;
}

mat-action-list button {
  background-image: none;
  background-color: initial;
  color: inherit;
  border-color: initial;
}

.cdk-high-contrast-active .mat-list-single-selected-option::after {
  border-bottom-color: initial;
}

@media (hover: none) {
  .mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,
  .mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,
  .mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover {
    background-image: none;
    background-color: initial;
  }
}
`;
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
